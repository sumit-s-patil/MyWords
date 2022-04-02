
using Words.Contracts;
using Words.Services;
using Xunit;

namespace Words.UnitTests.ServiceTests
{
	public class WordsServiceShould
	{
		private readonly IWordsService _wordsService;

		public WordsServiceShould()
		{
			_wordsService = new WordsService();
		}

		[Fact]
		public async void Not_Add_Word_If_Empty_Or_Null()
		{
			bool isAdded = await _wordsService.AddWord("");
			Assert.False(isAdded);
		}
		
		[Fact]
		public async void Add_Word_If_Not_Empty_Or_Null()
		{
			bool isAdded = await _wordsService.AddWord("Test");
			Assert.True(isAdded);
		}

		[Fact]
		public async void Return_At_Least_One_Word()
		{
			var words = await _wordsService.GetWords();
			Assert.NotEmpty(words);
		}

		[Fact]
		public async void Not_Add_Duplicate_Word()
		{
			bool isAdded = await _wordsService.AddWord("Word1");
			Assert.False(isAdded);
		}

		[Fact]
		public async void Not_Update_To_Existing_Word()
		{
			bool isUpdated = await _wordsService.UpdateWord("Word4", "Word1");
			Assert.False(isUpdated);
		}
		
		[Fact]
		public async void Not_Update_If_Input_Is_Empty()
		{
			bool isUpdated = await _wordsService.UpdateWord("Word4", "");
			Assert.False(isUpdated);
		}
	}
}
