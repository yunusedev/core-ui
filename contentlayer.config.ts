import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    api: { type: "string", required: false }
  },
}));

export default makeSource({
  contentDirPath: "docs",
  documentTypes: [Docs],
  disableImportAliasWarning: true
});
