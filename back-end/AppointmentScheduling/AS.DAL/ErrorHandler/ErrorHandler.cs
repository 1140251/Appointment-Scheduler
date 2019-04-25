using System;

namespace AS.ErrorHandler
{

    public class ErrorHandler : IErrorHandler
    {
        public string GetMessage(ErrorMessagesEnum message)
        {
            switch (message)
            {
                case ErrorMessagesEnum.EntityNull:
                    return "The entity {0} passed is null";

                case ErrorMessagesEnum.ModelValidation:
                    return "The request data is not correct. Additional information: {0}";

                case ErrorMessagesEnum.EntityNotCreated:
                    return "The entity for {0} passed cannot be created. Additional information: {1}";

                case ErrorMessagesEnum.EntityAlreadyCreated:
                    return "The entity for {0} passed was already be created.";

                case ErrorMessagesEnum.EntityNotFound:
                    return "The entity for {0} passed not found.";

                case ErrorMessagesEnum.EntityNotUpdated:
                    return "The entity for {0} passed was not updated.";
                case ErrorMessagesEnum.ExceededMaxOpenOrders:
                    return "Cannot create the {0} order, exceeds the maximum number of open orders allowed (4) for the {0} with code {1}.";
                case ErrorMessagesEnum.DateIsInvalid:
                    return "The datetime {0} must be greater or equals to today's date";
                case ErrorMessagesEnum.StartDateIsInvalid:
                    return "the start date {0} must be before the end date {1}";

                //case ErrorMessagesEnum.AuthCannotCreate:
                //    return "Cannot create user";

                //case ErrorMessagesEnum.AuthCannotDelete:
                //    return "Cannot delete user";

                //case ErrorMessagesEnum.AuthCannotUpdate:
                //    return "Cannot update user";

                //case ErrorMessagesEnum.AuthNotValidInformations:
                //    return "Invalid informations";

                //case ErrorMessagesEnum.AuthCannotRetrieveToken:
                //    return "Cannot retrieve token";
                default:
                    throw new ArgumentOutOfRangeException(nameof(message), message, null);
            }

        }
    }
}
