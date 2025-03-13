namespace JapaneseMasterAPI.Entities
{
    public class User
    {
        public Guid Id { set; get; }
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }
}
