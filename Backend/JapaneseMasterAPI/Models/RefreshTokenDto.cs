namespace JapaneseMasterAPI.Models
{
    public class RefreshTokenDto
    {
        public required string RefreshToken { get; set; }

        public Guid UserId { get; set; }

        public DateTime? RefreshTokenExpiry { get; set; }
    }
}
