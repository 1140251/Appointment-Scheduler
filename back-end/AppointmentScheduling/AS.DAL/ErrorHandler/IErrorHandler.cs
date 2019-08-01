namespace AS.ErrorHandler
{
    public interface IErrorHandler
    {
        string GetMessage(ErrorMessagesEnum message);
    }

    public enum ErrorMessagesEnum
    {
        EntityNull = 1,
        ModelValidation = 2,
        EntityNotCreated = 3,
        EntityAlreadyCreated = 4,
        EntityNotFound = 5,
        EntityNotUpdated = 6,
        ExceededMaxOpenOrders = 7,
        DateIsInvalid = 8,
        StartDateIsInvalid = 9,
        RoomNotAvailable = 10,
        //AuthUserDoesNotExists = 3,
        //AuthWrongCredentials = 4,
        //AuthCannotCreate = 5,
        //AuthCannotDelete = 6,
        //AuthCannotUpdate = 7,
        //AuthNotValidInformations = 8,
        //AuthCannotRetrieveToken = 9
    }
}
