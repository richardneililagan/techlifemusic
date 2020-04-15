'use strict'
import mdx from '@mdx-js/mdx'

const body = `
# This is a header.

## This is a subheader.

And this is some text.
`

module.exports = {
  mdx: {
    id: 'test-123',
    body,
    fields: {
      tagSlugs: ['/test_0', '/test_1']
    },
    frontmatter: {
      date: '2016-09-01',
      description: 'test',
      title: 'test',
      subtitle: 'test subtitle',
      tags: ['test_0', 'test_1']
    }
  }
}
