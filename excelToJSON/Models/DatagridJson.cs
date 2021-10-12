namespace excelToJSON.Models
{
    public class DatagridJson
    {
        public string? Description { get; set; }
        public string? Rows {  get; set; }
        public JsonContent? ValidationErrors {  get; set; }
    }
}