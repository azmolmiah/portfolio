export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "titleOne",
      title: "Title One",
      type: "string",
    },
    {
      name: "titleTwo",
      title: "Title Two",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "icons",
      title: "Icons",
      type: "array",
      of: [
        {
          name: "icon",
          title: "Icon",
          type: "string",
        },
      ],
    },
  ],
};
