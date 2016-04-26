String.prototype.hasVowels = function() {
	var pattern = /[aeiou]/i;
	return pattern.test(this);
};

String.prototype.toUpper = function() {
	var pattern = /[a-z]/g;
	return this.replace(pattern, function(args) {
		return String.fromCharCode(args.charCodeAt() - 32);
	});
};

String.prototype.toLower = function() {
	var pattern = /[A-Z]/g;
	return this.replace(pattern, function(args) {
		return String.fromCharCode(args.charCodeAt() + 32);
	});
};

String.prototype.ucFirst = function() {
	// using toUpper above
	return this.substr(0, 1).toUpper() + this.substr(1);
};

String.prototype.isQuestion = function() {

};

String.prototype.words = function() {

};

String.prototype.wordCount = function() {

};

String.prototype.toCurrency = function() {

};

String.prototype.fromCurrency = function() {

};

