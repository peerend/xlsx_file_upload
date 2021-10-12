namespace excelToJSON.Models
{
    public class DatagridJson
    {
        public string? Description { get; set; }
        public JsonContent? Content {  get; set; }
        public JsonContent? ValidationErrors {  get; set; }
    }
}