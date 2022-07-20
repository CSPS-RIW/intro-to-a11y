const formats = {
    text: "Formats",
    items: [
        { text: "Excel", link: "/formats/excel" },
        { text: "PowerPoint", link: "/formats/powerpoint" },
        { text: "Websites", link: "/formats/websites" },
        { text: "Word", link: "/formats/word" }

    ]

}
export default {
    title: "Basic Accessibility",
    description: "",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Formats", link: "/formats/websites" },
            { text: "Resources", link: "/resources/" },
        ],
        sidebar: { "/formats/": [formats] },
    },
};