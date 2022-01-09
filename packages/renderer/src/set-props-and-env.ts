import {Page} from 'puppeteer-core';
import {Internals} from 'remotion';

export const setPropsAndEnv = async ({
	inputProps,
	envVariables,
	page,
	port,
	initialFrame,
}: {
	inputProps: unknown;
	envVariables: Record<string, string> | undefined;
	page: Page;
	port: number;
	initialFrame: number;
}) => {
	if (inputProps || envVariables) {
		await page.goto(`http://localhost:${port}/index.html`);

		if (inputProps) {
			await page.evaluate(
				(key, input) => {
					window.localStorage.setItem(key, input);
				},
				Internals.INPUT_PROPS_KEY,
				JSON.stringify(inputProps)
			);
		}

		if (envVariables) {
			await page.evaluate(
				(key, input) => {
					window.localStorage.setItem(key, input);
				},
				Internals.ENV_VARIABLES_LOCAL_STORAGE_KEY,
				JSON.stringify(envVariables)
			);
		}

		await page.evaluate(
			(key, value) => {
				window.localStorage.setItem(key, value);
			},
			Internals.INITIAL_FRAME_LOCAL_STORAGE_KEY,
			initialFrame
		);
	}
};
