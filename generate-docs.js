const docket = require('docket-parser');

const fileList = ['index.js', 'abbreviation.js', 'address.js', 'anchor.js', 'area.js', 'article.js', 'aside.js', 
                  'audio.js', 'base.js', 'bidirectional-isolation.js', 'bidirectional-override.js', 
                  'blockquote.js', 'body.js', 'bold.js', 'button.js', 'canvas.js', 'caption.js', 
                  'child.js', 'citation.js', 'code.js', 'column-group.js', 'column.js', 'container-element.js', 
                  'container.js', 'data-list.js', 'definition-description.js', 'definition-list.js', 
                  'definition-term.js', 'definition.js', 'deleted.js', 'details.js', 'dialog.js', 'div.js', 
                  'element.js', 'embed.js', 'emphasized.js', 'fieldset.js', 'figure-caption.js', 'figure.js', 
                  'footer.js', 'form.js', 'head.js', 'header.js', 'heading-group.js', 'heading.js', 
                  'horizontal-rule.js', 'html.js', 'image.js', 'input.js', 'inserted.js', 
                  'italic.js', 'keyboard.js', 'label.js', 'legend.js', 'line-break.js', 'link.js', 
                  'list-item.js', 'main.js', 'map.js', 'mark.js', 'menu-item.js', 'menu.js', 'meta.js', 
                  'meter.js', 'multimedia-object.js', 'nav.js', 'no-script.js', 'option-group.js', 'option.js', 
                  'ordered-list.js', 'output.js', 'paragraph.js', 'param.js', 'picture.js', 'preformatted-text.js', 
                  'progress.js', 'quotation.js', 'sample.js', 'script.js', 'section.js', 'select.js', 'small.js', 
                  'source.js', 'span.js', 'strikethrough.js', 'strong.js', 'style.js', 'subscript.js', 
                  'summary.js', 'superscript.js', 'svg.js', 'table-body.js', 'table-data.js', 'table-footer.js', 
                  'table-head.js', 'table-header.js', 'table-row.js', 'table.js', 'template.js', 'text-area.js', 
                  'text.js', 'time.js', 'title.js', 'track.js', 'underline.js', 'unordered-list.js', 'variable.js', 
                  'video.js', 'word-break-opportunity.js', ];

docket.title('EZHTML v0.2.0 Documentation');

docket.parseFiles(fileList);
docket.generateDocs('docs');