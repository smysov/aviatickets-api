module.exports = {
	clearMocks: true, //Очистка моков при каждом запуске
	collectCoverageFrom: ['src/**/*.js'], //Точка сбора информации по покрытию тестами
	coverageDirectory: 'coverage', //Место хранения отчетов
	moduleFileExtensions: ['js'], //Какие файлы тестируются
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], //Где находятся тесты
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.(js|jsx)?$': 'babel-jest',
	},
	// verbose: false, //Отключения подробной информации о тесте
};

