const state = {
  pages: [
    {
      type: "LargeLayout",
      sections: [
        {
          component: "SectionA",
          data: {
            title: "Hola",
            subtitle: "Que tal",
          },
        },
        {
          component: "SectionB",
          data: {
            title: "Bonjour",
            subtitle: "Ca va?",
            src: "https://picsum.photos/200/300",
          },
        },
      ],
    },
  ],
};

export default state;
