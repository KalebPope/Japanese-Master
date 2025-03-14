namespace JapaneseMasterAPI.Entities
{
    public class User
    {
        public Guid Id { set; get; }
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;

        public string? RefreshToken { get; set; } = string.Empty;

        public DateTime? RTokenExpiryDate { get; set; }
    }
}
