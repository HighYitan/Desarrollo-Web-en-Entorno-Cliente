export default function DarkMode() {
    return (
        <div className="flex flex-col justify-end items-center">
            <label
                htmlFor="kekw-button"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-4"
            >
                Dark Mode
            </label>
            <button
                id="kekw-button"
                className="bg-red-800 text-end text-white font-bold py-2 px-4 rounded mr-4"
            >
                kekw
            </button>
        </div>
    )
}