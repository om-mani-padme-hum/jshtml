/** Require local modules */
const abbreviation = require('./elements/abbreviation');
const address = require('./elements/address');
const anchor = require('./elements/anchor');
const area = require('./elements/area');
const article = require('./elements/article');
const aside = require('./elements/aside');
const audio = require('./elements/audio');
const base = require('./elements/base');
const bidirectionalIsolation = require('./elements/bidirectional-isolation');
const bidirectionalOverride = require('./elements/bidirectional-override');
const blockquote = require('./elements/blockquote');
const body = require('./elements/body');
const bold = require('./elements/bold');
const button = require('./elements/button');
const canvas = require('./elements/canvas');
const caption = require('./elements/caption');
const child = require('./elements/child');
const citation = require('./elements/citation');
const code = require('./elements/code');
const columnGroup = require('./elements/column-group');
const column = require('./elements/column');
const containerElement = require('./elements/container-element');
const container = require('./elements/container');
const dataList = require('./elements/data-list');
const definitionDescription = require('./elements/definition-description');
const definitionList = require('./elements/definition-list');
const definitionTerm = require('./elements/definition-term');
const definition = require('./elements/definition');
const deleted = require('./elements/deleted');
const details = require('./elements/details');
const dialog = require('./elements/dialog');
const div = require('./elements/div');
const element = require('./elements/element');
const embed = require('./elements/embed');
const emphasized = require('./elements/emphasized');
const fieldset = require('./elements/fieldset');
const figureCaption = require('./elements/figure-caption');
const figure = require('./elements/figure');
const footer = require('./elements/footer');
const form = require('./elements/form');
const head = require('./elements/head');
const header = require('./elements/header');
const headingGroup = require('./elements/heading-group');
const heading = require('./elements/heading');
const horizontalRule = require('./elements/horizontal-rule');
const html = require('./elements/html');
const image = require('./elements/image');
const input = require('./elements/input');
const inserted = require('./elements/inserted');
const italic = require('./elements/italic');
const keyboard = require('./elements/keyboard');
const label = require('./elements/label');
const legend = require('./elements/legend');
const lineBreak = require('./elements/line-break');
const link = require('./elements/link');
const listItem = require('./elements/list-item');
const main = require('./elements/main');
const map = require('./elements/map');
const mark = require('./elements/mark');
const menuItem = require('./elements/menu-item');
const menu = require('./elements/menu');
const meta = require('./elements/meta');
const meter = require('./elements/meter');
const multimediaObject = require('./elements/multimedia-object');
const nav = require('./elements/nav');
const noScript = require('./elements/no-script');
const optionGroup = require('./elements/option-group');
const option = require('./elements/option');
const orderedList = require('./elements/ordered-list');
const output = require('./elements/output');
const paragraph = require('./elements/paragraph');
const param = require('./elements/param');
const picture = require('./elements/picture');
const preformattedText = require('./elements/preformatted-text');
const progress = require('./elements/progress');
const quotation = require('./elements/quotation');
const sample = require('./elements/sample');
const script = require('./elements/script');
const section = require('./elements/section');
const select = require('./elements/select');
const small = require('./elements/small');
const source = require('./elements/source');
const span = require('./elements/span');
const strikethrough = require('./elements/strikethrough');
const strong = require('./elements/strong');
const style = require('./elements/style');
const subscript = require('./elements/subscript');
const summary = require('./elements/summary');
const superscript = require('./elements/superscript');
const svg = require('./elements/svg');
const tableBody = require('./elements/table-body');
const tableData = require('./elements/table-data');
const tableFooter = require('./elements/table-footer');
const tableHead = require('./elements/table-head');
const tableHeader = require('./elements/table-header');
const tableRow = require('./elements/table-row');
const table = require('./elements/table');
const template = require('./elements/template');
const textArea = require('./elements/text-area');
const text = require('./elements/text');
const time = require('./elements/time');
const title = require('./elements/title');
const track = require('./elements/track');
const underline = require('./elements/underline');
const unorderedList = require('./elements/unordered-list');
const variable = require('./elements/variable');
const video = require('./elements/video');
const wordBreakOpportunity = require('./elements/word-break-opportunity');

/** 
 * @module ezhtml
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description A simple library for programatically rendering HTML and client-side JavaScript using Node.js.
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
module.exports.OptionGroup = optionGroup.OptionGroup;
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
