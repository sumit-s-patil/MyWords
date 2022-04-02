using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.Threading.Tasks;
using Words.Contracts;
using Words.Models;

namespace Words.Controllers
{
	[Route("api/[controller]")]
	public class WordsController : Controller
	{
		private IWordsService _wordsService;

		public WordsController(IWordsService wordsService)
		{
			_wordsService = wordsService;
		}

		[HttpGet("[action]")]
		public async Task<WordModel> GetWords()
		{
			WordModel wordModel = new WordModel();
			wordModel.words = await _wordsService.GetWords();
			return wordModel;
		}


		[HttpPost("[action]")]
		public async Task<bool> AddWord([FromBody] WordInput word)
		{
			return await _wordsService.AddWord(word.word);
		}
		
		[HttpPost("[action]")]
		public async Task<bool> UpdateWord([FromBody] UpdateWordInput word)
		{
			return await _wordsService.UpdateWord(word.word, word.input);
		}
		
		[HttpPost("[action]")]
		public async Task<bool> DeleteWord([FromBody] WordInput word)
		{
			return await _wordsService.DeleteWord(word.word);
		}

	}	
}
