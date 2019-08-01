
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace AS.API.Infrastructure.EmailServices
{

    public class EmailSettings
    {

        public string FromAddress { get; set; }
        public string ApiKey { get; set; }
    }

    public class SendGridSender : ISender
    {

        private readonly EmailSettings _emailSettings;

        public SendGridSender(IConfiguration config)
        {
            _emailSettings = config.GetSection("EmailSettings").Get<EmailSettings>();
        }

        public SendResponse Send(Email email, CancellationToken? token = null)
        {
            return SendAsync(email, token).GetAwaiter().GetResult();
        }

        public async Task<SendResponse> SendAsync(Email email, CancellationToken? token = null)
        {
            var sendGridClient = new SendGridClient(_emailSettings.ApiKey);

            var mailMessage = new SendGridMessage();
            mailMessage.SetSandBoxMode(false);

            mailMessage.SetFrom(new EmailAddress(_emailSettings.FromAddress));

            if (email.ToAddresses.Any(a => !string.IsNullOrWhiteSpace(a)))
                mailMessage.AddTos(email.ToAddresses.Select(ConvertAddress).ToList());

            mailMessage.SetSubject(email.Subject);

            if (email.IsHtml)
            {
                mailMessage.HtmlContent = email.Body;
            }
            else
            {
                mailMessage.PlainTextContent = email.Body;
            }

            var sendGridResponse = await sendGridClient.SendEmailAsync(mailMessage, token.GetValueOrDefault());

            var sendResponse = new SendResponse();

            if (IsHttpSuccess((int)sendGridResponse.StatusCode)) return sendResponse;

            sendResponse.ErrorMessages.Add($"{sendGridResponse.StatusCode}");
            var messageBodyDictionary = sendGridResponse.DeserializeResponseBodyAsync(sendGridResponse.Body).Result;

            if (messageBodyDictionary.ContainsKey("errors"))
            {
                var errors = messageBodyDictionary["errors"];

                foreach (var error in errors)
                {
                    sendResponse.ErrorMessages.Add($"{error}");
                }
            }

            return sendResponse;
        }

        private EmailAddress ConvertAddress(String emailAddress) => new EmailAddress(emailAddress);


        private bool IsHttpSuccess(int statusCode)
        {
            return statusCode >= 200 && statusCode < 300;
        }

    }
}
