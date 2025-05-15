const assetsFolder = "/assets/images";

const getRandomImageUrl = async (): Promise<string> => {
	const images = import.meta.globEager(`${assetsFolder}/*.{png,jpg,jpeg,gif}`);

	// Extract the URL (default export) from each imported module
	const imageUrls = Object.values(images).map((module) =>
		typeof module === "string" ? module : module.default
	) as string[];

	// Pick a random index
	const randomIndex = Math.floor(Math.random() * imageUrls.length);

	// Return the URL at that index
	return imageUrls[randomIndex];
};

export default getRandomImageUrl;
