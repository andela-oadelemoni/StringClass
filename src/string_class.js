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
	var pattern = /\w+\s*\?$/;
	return pattern.test(this);
};

String.prototype.words = function() {
	var pattern = /\w+/g;
	return this.match(pattern);
};

String.prototype.wordCount = function() {
	return this.words().length;
};

String.prototype.toCurrency = function() {
	var pattern = /^\d{4,}/;
	return pattern.test(this) ? parseFloat(this).toLocaleString() : this;
};

String.prototype.fromCurrency = function() {
	var pattern = /,\s*/g;
	return parseFloat(this.replace(pattern, ""));
};

