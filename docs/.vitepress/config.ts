const formats = {
    text: "Formats",
    items: [
        { text: "Websites", link: "/formats/websites" }
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