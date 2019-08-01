using AS.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace AS.DAL.Common
{
    public static class Utils
    {
        public static T CheckUpdateObject<T>(T originalObj, T updateObj) where T : BaseEntity
        {
            foreach (var property in updateObj.GetType().GetProperties())
            {
                if (property.GetValue(updateObj, null) == null)
                {
                    property.SetValue(updateObj, originalObj.GetType().GetProperty(property.Name)
                    .GetValue(originalObj, null));
                }
            }
            return updateObj;
        }


        public static TimeSpan ParseDuration(String duration)
        {
            string[] words = Regex.Split(duration.Trim(), "H|M", RegexOptions.IgnoreCase);
            if(duration.Contains("M",StringComparison.InvariantCultureIgnoreCase) && String.IsNullOrEmpty(words[1]))
            {
                return new TimeSpan(0, Convert.ToInt32((!String.IsNullOrEmpty(words[0])) ? words[0] : "0"), 0);
            }

            return new TimeSpan(Convert.ToInt32((!String.IsNullOrEmpty(words[0])) ? words[0] : "0"), Convert.ToInt32((!String.IsNullOrEmpty(words[1])) ? words[1] : "0"), 0);
        }
    }
}
