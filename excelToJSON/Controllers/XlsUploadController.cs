using Microsoft.AspNetCore.Mvc;
using excelToJSON.Models;
using excelToJSON.Code;

namespace excelToJSON.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class XlsUploadController : ControllerBase
    {

        private readonly ILogger<XlsUploadController> _logger;

        public XlsUploadController(ILogger<XlsUploadController> logger)
        {
            _logger = logger;
        }
      
        [HttpPost("uploadfile")]
        public async Task<string> UploadFile([FromForm] IFormFile xlsFile)
        {
            var thisForm = xlsFile;
            var myJson = ExcelHelper.ReadExcelasJSON(xlsFile);
            return myJson;
        }
    }
}