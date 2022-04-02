using System.Collections.Generic;
using System.Threading.Tasks;
using Words.Contracts;

namespace Words.Services
{
	public class WordsService : IWordsService
	{
		private static IList<string> words = new List<string>
		{
			"Word1",
			"Word2",
			"Word3",
			"Word4",
			"Word5"
		};
		public WordsService()
		{

		}
		public async Task<IList<string>> GetWords()
		{
			return words;
		}

		public async Task<bool> AddWord(string word)
		{
			if (string.IsNullOrEmpty(word) || words.Contains(word))
				return false;
			words.Add(word);
			return true;
		}

		public async Task<bool> DeleteWord(string word)
		{
			if (words.Contains(word))
				words.Remove(word);
			return true;
		}

		public async Task<bool> UpdateWord(string word, string input)
		{
			if (words.Contains(input) || string.IsNullOrEmpty(input))
				return false;
			words.Remove(word);
			words.Add(input);

			return true;
		}
	}
}
