const clipArtCollectionSchema = {
    name: "clip_arts",
    fields: [
      { name: "id", type: "string" },
      { name: "title", type: "string" },
      { name: "tags", type: "string[]" },
      { name: "description", type: "string" },
      { name: "image_url", type: "string" },
      { name: "date", type: "int32" }
    ],
    default_sorting_field: "date"
  };
  
  export default clipArtCollectionSchema;
  