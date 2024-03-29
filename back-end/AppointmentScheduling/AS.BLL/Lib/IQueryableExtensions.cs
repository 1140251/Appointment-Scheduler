﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Linq.Dynamic.Core.Exceptions;

namespace AS.BLL.Lib
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Sort<T>(this IQueryable<T> source, string sortBy)
        {
            if (source == null)
                throw new ArgumentNullException("source");

            if (string.IsNullOrEmpty(sortBy))
                throw new ArgumentNullException("sortBy");

            var sortExpression = string.Empty;

            var listSortBy = sortBy.Split(',');
            foreach (var item in listSortBy)
            {
                sortExpression += AdjustDirection(item) + ",";
            }

            sortExpression = sortExpression.Substring(0, sortExpression.Length - 1);

            try
            {
                source = source.OrderBy(sortExpression);
            }
            catch (ParseException)
            {
                // sortBy include field not part of the model
            }

            return source;
        }

        private static string AdjustDirection(string item)
        {
            if (!item.Contains(' '))
                return item; // no direction specified

            var field = item.Split(' ')[0];
            var direction = item.Split(' ')[1];

            switch (direction)
            {
                case "asc":
                case "ascending":
                    return field + " ascending";

                case "desc":
                case "descending":
                    return field + " descending";

                default:
                    return field;
            };
        }

        public static IEnumerable<T> ApplySort<T>(this IEnumerable<T> source, SortingParameter sortingParameter)
        {
            if (!string.IsNullOrEmpty(sortingParameter?.SortBy))
            {
                var query = source.AsQueryable();
                source = query.Sort(sortingParameter.SortBy).AsEnumerable<T>();
            }

            return source;
        }
    }
}
