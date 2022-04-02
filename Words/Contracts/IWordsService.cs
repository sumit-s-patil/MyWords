using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Words.Contracts
{
	public interface IWordsService
	{
		Task<IList<string>> GetWords();
		Task<bool> AddWord(string word);
		Task<bool> DeleteWord(string word);
		Task<bool> UpdateWord(string word, string input);
	}
}
