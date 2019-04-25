using AS.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

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
    }
}
