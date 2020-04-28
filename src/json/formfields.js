export const formFields = {
  input: [
    {
      name: "username",
      type: "text",
      placeholder: "Enter username",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter password",
      required: true,
    },
  ],
  select: [
    {
      name: "selectcollege",
      isMultipleMode: false,
      options: [
        {
          option: "IIIT BH",
          value: "clgid",
        },
        {
          option: "KIIT",
          value: "clgid",
        },
      ],
    },
    {
        name: "selectlanguage",
        isMultipleMode: true,
        options: [
          {
            option: "English",
            value: "english",
          },
          {
            option: "Hindi",
            value: "hindi",
          },
        ],
      }
  ],
  "switch":[
      {
          "defaultChecked": true,
          "checkedChildren": "right",
          "unCheckedChildren": "wrong"
      },
      {
        "defaultChecked": false,
        "checkedChildren": "",
        "unCheckedChildren": ""
    }
  ]
};
