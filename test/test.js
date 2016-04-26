describe("String Class Extension Test Suite", function() {
	// test that all methods exist
	describe("new String methods exist", function() {
		it("should confirm that all expected methods exist", function() {
			var string = "string";
			expect(typeof string.hasVowels).toEqual('function');
			expect(typeof string.toUpper).toEqual('function');
			expect(typeof string.toLower).toEqual('function');
			expect(typeof string.ucFirst).toEqual('function');
			expect(typeof string.isQuestion).toEqual('function');
			expect(typeof string.words).toEqual('function');
			expect(typeof string.wordCount).toEqual('function');
			expect(typeof string.toCurrency).toEqual('function');
			expect(typeof string.fromCurrency).toEqual('function');
		});
	});
	// // hasVowels method test
	describe("hasVowels method test", function() {
		it("should check for vowels in a string", function() {
			var string = "string";
			expect(string.hasVowels()).toBe(true);
			string = 'rhythm';
			expect(string.hasVowels()).toBe(false);
		});
	});
	// toUpper method test
	describe("toUpper method test", function() {
		it("should convert string to upper case", function() {
			var string = "string";
			expect(string.toUpper()).toEqual("STRING");
		});
	});
	// toLower method test
	describe("toLower method test", function() {
		it("should convert string to lower case", function() {
			var string = "STRING";
			expect(string.toLower()).toEqual("string");
		});
	});
	// ucFirst method test
	describe("ucFirst method test", function() {
		it("should convert first character to upper case", function() {
			var string = "string";
			spyOn(string, "toUpper");
			string.ucFirst();
			expect(string.toUpper).toHaveBeenCalled();
			expect(string.ucFirst()).toEqual("String");
		});
	});
	// isQuestion method test
	describe("isQuestion method test", function() {
		it("should check if string is a question", function() {
			var string = "string?";
			expect(string.isQuestion()).toBe(true);
			string = "string";
			expect(string.isQuestion()).toBe(false);
		});
	});
	// words method test
	describe("words method test", function() {
		it("should return the list of words in the string as an array", function() {
			var string = "This is a simple string";
			expect(typeof string.words()).toBe('object');
			expect(string.words() instanceof Array).toBe(true);
			var expected = ['This', 'is', 'a', 'simple', 'string'];
			expect(string.words()).toEqual(expected);
		});
	});
	// wordCount method test
	describe("wordCount method test", function() {
		it("should return the number of words in the string", function() {
			var string = "This is a simple string";
			spyOn(string, "words");
			string.wordCount();
			expect(string.words).toHaveBeenCalled();
			expect(string.wordCount()).toEqual(5);
		});
	});
	// toCurrency method test
	describe("toCurrency method test", function() {
		it("should return the currency representation of the string", function() {
			var string = "122392.12";
			expect(string.toCurrency()).toEqual("122,392.12");
			string = "1112.2";
			expect(string.toCurrency()).toEqual("1,112.2");
			string = "1000";
			expect(string.toCurrency()).toEqual("1,000");
		});
	});
	// fromCurrency method test
	describe("fromCurrency method test", function() {
		it("should return the number representation of the string", function() {
			var string = "122,392.12";
			expect(typeof string.toCurrency()).toEqual('number');
			expect(string.toCurrency()).toEqual(122392.12);
			string = "1,112.2";
			expect(string.toCurrency()).toEqual(1112.2);
			string = "1,000";
			expect(string.toCurrency()).toEqual(1000);
		});
	});

});