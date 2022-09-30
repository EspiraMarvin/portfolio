export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" }}]
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url"
    },
    {
      name: "number",
      title: "Number",
      type: "number",
      description: "Project Number",
      validation: (Rule) => Rule.min(0).max(100)
    },
  ],
}
