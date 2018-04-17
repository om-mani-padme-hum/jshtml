/** Require local modules */
const abbreviation = require('./abbreviation');
const address = require('./address');
const anchor = require('./anchor');
const area = require('./area');
const article = require('./article');
const aside = require('./aside');
const audio = require('./audio');
const base = require('./base');
const bidirectionalIsolation = require('./bidirectional-isolation');
const bidirectionalOverride = require('./bidirectional-override');
const blockquote = require('./blockquote');
const body = require('./body');
const bold = require('./bold');
const button = require('./button');
const canvas = require('./canvas');
const caption = require('./caption');
const child = require('./child');
const citation = require('./citation');
const code = require('./code');
const columnGroup = require('./column-group');
const column = require('./column');
const containerElement = require('./container-element');
const container = require('./container');
const dataList = require('./data-list');
const definitionDescription = require('./definition-description');
const definitionList = require('./definition-list');
const definitionTerm = require('./definition-term');
const definition = require('./definition');
const deleted = require('./deleted');
const details = require('./details');
const dialog = require('./dialog');
const div = require('./div');
const element = require('./element');
const embed = require('./embed');
const emphasized = require('./emphasized');
const fieldset = require('./fieldset');
const figureCaption = require('./figure-caption');
const figure = require('./figure');
const footer = require('./footer');
const form = require('./form');
const head = require('./head');
const header = require('./header');
const headingGroup = require('./heading-group');
const heading = require('./heading');
const horizontalRule = require('./horizontal-rule');
const html = require('./html');
const image = require('./image');
const input = require('./input');
const inserted = require('./inserted');
const italic = require('./italic');
const keyboard = require('./keyboard');
const label = require('./label');
const legend = require('./legend');
const lineBreak = require('./line-break');
const link = require('./link');
const listItem = require('./list-item');
const main = require('./main');
const map = require('./map');
const mark = require('./mark');
const menuItem = require('./menu-item');
const menu = require('./menu');
const meta = require('./meta');
const meter = require('./meter');
const multimediaObject = require('./multimedia-object');
const nav = require('./nav');
const noScript = require('./no-script');
const optionGroup = require('./option-group');
const option = require('./option');
const orderedList = require('./ordered-list');
const output = require('./output');
const paragraph = require('./paragraph');
const param = require('./param');
const picture = require('./picture');
const preformattedText = require('./preformatted-text');
const progress = require('./progress');
const quotation = require('./quotation');
const sample = require('./sample');
const script = require('./script');
const section = require('./section');
const select = require('./select');
const small = require('./small');
const source = require('./source');
const span = require('./span');
const strikethrough = require('./strikethrough');
const strong = require('./strong');
const style = require('./style');
const subscript = require('./subscript');
const summary = require('./summary');
const superscript = require('./superscript');
const svg = require('./svg');
const tableBody = require('./table-body');
const tableData = require('./table-data');
const tableFooter = require('./table-footer');
const tableHead = require('./table-head');
const tableHeader = require('./table-header');
const tableRow = require('./table-row');
const table = require('./table');
const template = require('./template');
const textArea = require('./text-area');
const text = require('./text');
const time = require('./time');
const title = require('./title');
const track = require('./track');
const underline = require('./underline');
const unorderedList = require('./unordered-list');
const variable = require('./variable');
const video = require('./video');
const wordBreakOpportunity = require('./word-break-opportunity');

/** 
 * @module jshtml
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description A simple library for programatically rendering HTML and inline JavaScript using JavaScript.
 */
module.exports.Abbreviation = abbreviation.Abbreviation;
module.exports.Address = address.Address;
module.exports.Anchor = anchor.Anchor;
module.exports.Area = area.Area;
module.exports.Article = article.Article;
module.exports.Aside = aside.Aside;
module.exports.Audio = audio.Audio;
module.exports.Base = base.Base;
module.exports.BidirectionalIsolation = bidirectionalIsolation.BidirectionalIsolation;
module.exports.BidirectionalOverride = bidirectionalOverride.BidirectionalOverride;
module.exports.Blockquote = blockquote.Blockquote;
module.exports.Body = body.Body;
module.exports.Bold = bold.Bold;
module.exports.Button = button.Button;
module.exports.Canvas = canvas.Canvas;
module.exports.Caption = caption.Caption;
module.exports.Child = child.Child;
module.exports.Citation = citation.Citation;
module.exports.Code = code.Code;
module.exports.ColumnGroup = columnGroup.ColumnGroup;
module.exports.Column = column.Column;
module.exports.ContainerElement = containerElement.ContainerElement;
module.exports.Container = container.Container;
module.exports.DataList = dataList.DataList;
module.exports.DefinitionDescription = definitionDescription.DefinitionDescription;
module.exports.DefinitionList = definitionList.DefinitionList;
module.exports.DefinitionTerm = definitionTerm.DefinitionTerm;
module.exports.Definition = definition.Definition;
module.exports.Deleted = deleted.Deleted;
module.exports.Details = details.Details;
module.exports.Dialog = dialog.Dialog;
module.exports.Div = div.Div;
module.exports.Element = element.Element;
module.exports.Embed = embed.Embed;
module.exports.Emphasized = emphasized.Emphasized;
module.exports.FieldSet = fieldset.FieldSet;
module.exports.FigureCaption = figureCaption.FigureCaption;
module.exports.Figure = figure.Figure;
module.exports.Footer = footer.Footer;
module.exports.Form = form.Form;
module.exports.Head = head.Head;
module.exports.Header = header.Header;
module.exports.HeadingGroup = headingGroup.HeadingGroup;
module.exports.Heading = heading.Heading;
module.exports.HorizontalRule = horizontalRule.HorizontalRule;
module.exports.HTML = html.HTML;
module.exports.Image = image.Image;
module.exports.Input = input.Input;
module.exports.Inserted = inserted.Inserted;
module.exports.Italic = italic.Italic;
module.exports.Keyboard = keyboard.Keyboard;
module.exports.Label = label.Label;
module.exports.Legend = legend.Legend;
module.exports.LineBreak = lineBreak.LineBreak;
module.exports.Link = link.Link;
module.exports.ListItem = listItem.ListItem;
module.exports.Main = main.Main;
module.exports.Map = map.Map;
module.exports.Mark = mark.Mark;
module.exports.MenuItem = menuItem.MenuItem;
module.exports.Menu = menu.Menu;
module.exports.Meta = meta.Meta;
module.exports.Meter = meter.Meter;
module.exports.MultimediaObject = multimediaObject.MultimediaObject;
module.exports.Nav = nav.Nav;
module.exports.NoScript = noScript.NoScript;
module.exports.OptionGroup = option.OptionGroup;
module.exports.Option = option.Option;
module.exports.OrderedList = orderedList.OrderedList;
module.exports.Output = output.Output;
module.exports.Paragraph = paragraph.Paragraph;
module.exports.Param = param.Param;
module.exports.Picture = picture.Picture;
module.exports.PreformattedText = preformattedText.PreformattedText;
module.exports.Progress = progress.Progress;
module.exports.Quotation = quotation.Quotation;
module.exports.Sample = sample.Sample;
module.exports.Script = script.Script;
module.exports.Section = section.Section;
module.exports.Select = select.Select;
module.exports.Small = small.Small;
module.exports.Source = source.Source;
module.exports.Span = span.Span;
module.exports.Strikethrough = strikethrough.Strikethrough;
module.exports.Strong = strong.Strong;
module.exports.Style = style.Style;
module.exports.Subscript = subscript.Subscript;
module.exports.Summary = summary.Summary;
module.exports.Superscript = superscript.Superscript;
module.exports.SVG = svg.SVG;
module.exports.TableBody = tableBody.TableBody;
module.exports.TableData = tableData.TableData;
module.exports.TableFooter = tableFooter.TableFooter;
module.exports.TableHead = tableHead.TableHead;
module.exports.TableHeader = tableHeader.TableHeader;
module.exports.TableRow = tableRow.TableRow;
module.exports.Table = table.Table;
module.exports.Template = template.Template;
module.exports.Text = text.Text;
module.exports.TextArea = textArea.TextArea;
module.exports.Time = time.Time;
module.exports.Title = title.Title;
module.exports.Track = track.Track;
module.exports.Underline = underline.Underline;
module.exports.UnorderedList = unorderedList.UnorderedList;
module.exports.Variable = variable.Variable;
module.exports.Video = video.Video;
module.exports.WordBreakOpportunity = wordBreakOpportunity.WordBreakOpportunity;
