export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'Number',
        title: 'Number',
        type: 'number',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };