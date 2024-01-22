import fs from 'fs';

/**
 * Sprawdza, czy plik istnieje i czy spełnia określone warunki dostępu.
 *
 * @param {string} path - Ścieżka do pliku, który ma być sprawdzony.
 * @param {number} [mode=fs.constants.F_OK] - Opcjonalny parametr określający tryb dostępu.
 *        Możliwe wartości to:
 *        - fs.constants.F_OK - sprawdza istnienie pliku (domyślnie),
 *        - fs.constants.R_OK - sprawdza, czy plik jest dostępny do odczytu,
 *        - fs.constants.W_OK - sprawdza, czy plik jest dostępny do zapisu,
 *        - fs.constants.X_OK - sprawdza, czy plik jest wykonywalny.
 * @returns {Promise<boolean>} Promise, który rozwiązuje się na `true`, jeśli plik spełnia
 *          wszystkie wymagane warunki, lub na `false`, jeśli plik nie istnieje lub nie spełnia
 *          wymaganych uprawnień.
 */
export const isFileExist = (path, mode = fs.constants.F_OK) => {
	return new Promise(resolve => {
		fs.access(path, mode, err => {
			resolve(!err);
		});
	});
};