// ServiceNow! Barcode Injector and Label Print
// (C) 2012 Nathan Heaps, Oleg Vaskevich, Peiling Ding, Northeastern University
// Uses components from http://www.codeproject.com/Articles/146336/Creating-a-Code-39-Barcode-using-HTML-CSS-and-Java


var sn_rrc_incident, sn_rrc_caller;

self.port.on("init", function init() {

    // get the incident number
    sn_rrc_incident = window.content.document.getElementById("sys_readonly.incident.number").value;
    sn_rrc_caller = window.content.document.getElementById("incident.caller_id_label").value;
    
    // return if this is not an incident
    if (!sn_rrc_incident.match(/INC/g))
    	return;

    // add a new button to print the label
    $("div.print_hide").append('<button type="submit" id="snBcPrintLabels">\
                            <img src="images/printer.gifx" />\
    						<span>Print Labels</span>\
    						</button>');
// <img src="images/printer.gifx" />

    window.content.document.getElementById("snBcPrintLabels").addEventListener("click", this.printLabel, false);    

//	if (!(sn_rrc_incident = sn_rrc_incident.match(/[1-9][0-9]*/g)[0]))
    //		return; // this code preserves only the numbers at the end
    
    // now add a barcode to the page
    var barcode = DrawHTMLBarcode_Code39(sn_rrc_incident,
    		0,
    		"no",
    		"in",
    		0,
    		3, 0.4,
    		3,
    		"bottom",
    		"left",
    		"",
    		"black",
    		"white");
    $($("td.vsplit")[0]).prepend(barcode + "<br />");
});

// todo: optimize for label size
function printLabel() {
	// populate the layout
	const xmlCodeSingle = '<?xml version="1.0" encoding="utf-8"?><DieCutLabel Version="8.0" Units="twips"><PaperOrientation>Landscape</PaperOrientation><Id>RRC Barcode</Id><PaperName>30252 Address</PaperName><DrawCommands><RoundRectangle X="0" Y="0" Width="1581" Height="5040" Rx="270" Ry="270" /></DrawCommands><ObjectInfo><TextObject><Name>TEXT</Name><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /><BackColor Alpha="0" Red="255" Green="255" Blue="255" /><LinkedObjectName></LinkedObjectName><Rotation>Rotation0</Rotation><IsMirrored>False</IsMirrored><IsVariable>True</IsVariable><HorizontalAlignment>Center</HorizontalAlignment><VerticalAlignment>Middle</VerticalAlignment><TextFitMode>ShrinkToFit</TextFitMode><UseFullFontHeight>True</UseFullFontHeight><Verticalized>False</Verticalized><StyledText><Element><String>Caller, Caller</String><Attributes><Font Family="Arial" Size="20" Bold="False" Italic="False" Underline="False" Strikeout="False" /><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /></Attributes></Element></StyledText></TextObject><Bounds X="331" Y="57.9999999999999" Width="4377.6" Height="345.6" /></ObjectInfo><ObjectInfo><BarcodeObject><Name>BARCODE</Name><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /><BackColor Alpha="0" Red="255" Green="255" Blue="255" /><LinkedObjectName></LinkedObjectName><Rotation>Rotation0</Rotation><IsMirrored>False</IsMirrored><IsVariable>True</IsVariable><Text>1234567</Text><Type>Code39</Type><Size>Medium</Size><TextPosition>Bottom</TextPosition><TextFont Family="Arial" Size="14" Bold="False" Italic="False" Underline="False" Strikeout="False" /><CheckSumFont Family="Arial" Size="7.3125" Bold="False" Italic="False" Underline="False" Strikeout="False" /><TextEmbedding>None</TextEmbedding><ECLevel>0</ECLevel><HorizontalAlignment>Center</HorizontalAlignment><QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" /></BarcodeObject><Bounds X="331" Y="427.4" Width="4449.6" Height="1065.6" /></ObjectInfo></DieCutLabel>';

    const xmlCodeDouble = '<?xml version="1.0" encoding="utf-8"?><DieCutLabel Version="8.0" Units="twips"><PaperOrientation>Landscape</PaperOrientation><Id>RRC Barcode</Id><PaperName>30370 Zip Disk</PaperName><DrawCommands><RoundRectangle X="0" Y="0" Width="2880" Height="3375" Rx="180" Ry="180" /></DrawCommands><ObjectInfo><TextObject><Name>TEXT</Name><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /><BackColor Alpha="0" Red="255" Green="255" Blue="255" /><LinkedObjectName></LinkedObjectName><Rotation>Rotation0</Rotation><IsMirrored>False</IsMirrored><IsVariable>True</IsVariable><HorizontalAlignment>Center</HorizontalAlignment><VerticalAlignment>Middle</VerticalAlignment><TextFitMode>ShrinkToFit</TextFitMode><UseFullFontHeight>True</UseFullFontHeight><Verticalized>False</Verticalized><StyledText><Element><String>Caller, Caller</String><Attributes><Font Family="Arial" Size="9" Bold="False" Italic="False" Underline="False" Strikeout="False" /><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /></Attributes></Element></StyledText></TextObject><Bounds X="50" Y="57" Width="2780" Height="201.637130737305" /></ObjectInfo><ObjectInfo><BarcodeObject><Name>BARCODE</Name><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /><BackColor Alpha="0" Red="255" Green="255" Blue="255" /><LinkedObjectName></LinkedObjectName><Rotation>Rotation0</Rotation><IsMirrored>False</IsMirrored><IsVariable>True</IsVariable><Text>1234567</Text><Type>Code39</Type><Size>Small</Size><TextPosition>Bottom</TextPosition><TextFont Family="Arial" Size="11" Bold="False" Italic="False" Underline="False" Strikeout="False" /><CheckSumFont Family="Arial" Size="7.3125" Bold="False" Italic="False" Underline="False" Strikeout="False" /><TextEmbedding>None</TextEmbedding><ECLevel>0</ECLevel><HorizontalAlignment>Center</HorizontalAlignment><QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" /></BarcodeObject><Bounds X="50" Y="364.017700195313" Width="2780" Height="633.982299804687" /></ObjectInfo><ObjectInfo><TextObject><Name>TEXT2</Name><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /><BackColor Alpha="0" Red="255" Green="255" Blue="255" /><LinkedObjectName></LinkedObjectName><Rotation>Rotation0</Rotation><IsMirrored>False</IsMirrored><IsVariable>True</IsVariable><HorizontalAlignment>Center</HorizontalAlignment><VerticalAlignment>Middle</VerticalAlignment><TextFitMode>ShrinkToFit</TextFitMode><UseFullFontHeight>True</UseFullFontHeight><Verticalized>False</Verticalized><StyledText><Element><String>Caller, Caller</String><Attributes><Font Family="Arial" Size="9" Bold="False" Italic="False" Underline="False" Strikeout="False" /><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /></Attributes></Element></StyledText></TextObject><Bounds X="50" Y="1785.6" Width="2780" Height="201.637130737305" /></ObjectInfo><ObjectInfo><BarcodeObject><Name>BARCODE2</Name><ForeColor Alpha="255" Red="0" Green="0" Blue="0" /><BackColor Alpha="0" Red="255" Green="255" Blue="255" /><LinkedObjectName></LinkedObjectName><Rotation>Rotation0</Rotation><IsMirrored>False</IsMirrored><IsVariable>True</IsVariable><Text>1234567</Text><Type>Code39</Type><Size>Small</Size><TextPosition>Bottom</TextPosition><TextFont Family="Arial" Size="11" Bold="False" Italic="False" Underline="False" Strikeout="False" /><CheckSumFont Family="Arial" Size="7.3125" Bold="False" Italic="False" Underline="False" Strikeout="False" /><TextEmbedding>None</TextEmbedding><ECLevel>0</ECLevel><HorizontalAlignment>Center</HorizontalAlignment><QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" /></BarcodeObject><Bounds X="50" Y="2088" Width="2780" Height="633.982299804687" /></ObjectInfo></DieCutLabel>';
    
	// get the labels
	var labelSingle = dymo.label.framework.openLabelXml(xmlCodeSingle);
	labelSingle.setObjectText("TEXT", sn_rrc_caller);
	labelSingle.setObjectText("BARCODE", sn_rrc_incident);
	var labelDouble = dymo.label.framework.openLabelXml(xmlCodeDouble);
	labelDouble.setObjectText("TEXT", sn_rrc_caller);
	labelDouble.setObjectText("TEXT2", sn_rrc_caller);
	labelDouble.setObjectText("BARCODE2", sn_rrc_incident);
	labelDouble.setObjectText("BARCODE", sn_rrc_incident);
	
	// get the printers
	var printers = dymo.label.framework.getPrinters();
	if (printers.length == 0) {
		alert("Error: No DYMO printers are installed. Make sure the DYMO printer is connected and powered on and the DYMO software and drivers are installed.");
		return;
	}
	
	// loop through all attached printers and print to the first label printer
	var printerName = "";
	for (var i = 0; i < printers.length; ++i) {
		var printer = printers[i];
		if (printer.printerType == "LabelWriterPrinter") {
			printerName = printer.name;
			break;
		}
	}
	
	// set printer settings and print
	var leftCopies = prompt("Enter number of copies for LEFT (permanent) printer:", 1);
	if (leftCopies === null)
		return;
	if (isNaN(leftCopies) || leftCopies > 5) {
		alert("Invalid or high input. Try again.");
		return;
	}

	var rightCopies = prompt("Enter number of copies for RIGHT (removable) printer (NOTE: prints 2 barcodes on each label):", 1);
	if (rightCopies === null)
		return;
	if (isNaN(rightCopies) || rightCopies > 5) {
		alert("Invalid or high input. Try again.");
		return;
	}
	
	if (leftCopies > 0)
		labelSingle.print(printerName, dymo.label.framework.createLabelWriterPrintParamsXml({
				twinTurboRoll : dymo.label.framework.TwinTurboRoll.Left,
				copies : leftCopies
			}));
	if (rightCopies > 0)
		labelDouble.print(printerName, dymo.label.framework.createLabelWriterPrintParamsXml({
				twinTurboRoll : dymo.label.framework.TwinTurboRoll.Right,
				copies : rightCopies
			}));
}

function DrawCode39Barcode(b, c) {
	return DrawHTMLBarcode_Code39(b, c, "yes", "in", 0, 3, 1, 3, "bottom", "center", "", "black", "white")
}
function DrawHTMLBarcode_Code39(b, c, d, e, a, l, j, g, k, h, m, o, p) {
	return DrawBarcode_Code39(b, c, d, e, a, l, j, g, k, h, m, o, p, "html")
}
function DrawBarcode_Code39(b, c, d, e, a, l, j, g, k, h, m, o, p, q) {
	void 0 == o && (o = "black");
	void 0 == p && (p = "white");
	void 0 == k ? k = "bottom" : "bottom" != k && "top" != k && (k = "bottom");
	void 0 == h ? h = "center" : "center" != h && ("left" != h && "right" != h) && (h = "center");
	void 0 == m && (m = "");
	void 0 == g && (g = 3);
	if (void 0 == j)
		j = 1;
	else if (0 >= j || 15 < j)
		j = 1;
	if (void 0 == l)
		l = 3;
	else if (0 >= l || 15 < l)
		l = 3;
	if (void 0 == a)
		a = 0;
	else if (0 > a || 2 < a)
		a = 0;
	void 0 == e ? e = "in" : "in" != e && "cm" != e && (e = "in");
	void 0 == d ? d = "yes" : "yes" != d && "no" != d && (d = "yes");
	var n = EncodeCode39(b, c),
	b =
		ConnectCode_Encode_Code39(b, c),
	s = 0,
	w = 0,
	t = 0,
	u = 0,
	c = 1,
	f = "",
	r = 0,
	v = 0;
	2 <= g && 3 >= g || (g = 3);
	for (x = 0; x < n.length; x++)
		"t" == n.substr(x, 1) ? (w++, s++) : "w" == n.substr(x, 1) && (t += g, s += 3);
	u = u + w + t;
	r = 0 < a ? a.toFixed(2) : (l / u).toFixed(2);
	v = 3 * r;
	2 <= g && 3 >= g && (v = r * g);
	"html" == q && ("center" == h ? f = '<div style="text-align:center">' : "left" == h ? f = '<div style="text-align:left;">' : "right" == h && (f = '<div style="text-align:right;">'), a = "", "yes" == d && "top" == k && (a = "" == m ? '<span style="font-family : arial; font-size:12pt">' + b + "</span><br />" : "<span style=" +
				m + ">" + b + "</span><br />"), f += a);
	for (x = 0; x < n.length; x++)
		a = 0 == c ? p : o, "t" == n.substr(x, 1) ? "html" == q && (f = f + '<span style="border-left:' + r + e + " solid " + a + ";height:" + j + e + ';display:inline-block;"></span>') : "w" == n.substr(x, 1) && "html" == q && (f = f + '<span style="border-left :' + v + e + " solid " + a + ";height:" + j + e + ';display:inline-block;"></span>'), c = 0 == c ? 1 : 0;
	"html" == q && (a = "", "yes" == d && "bottom" == k && (a = "" == m ? '<br /><span style="font-family : arial; font-size:12pt">' + b + "</span>" : "<br /><span style=" + m + ">" + b + "</span>"), f = f + a +
			"</div>");
	return f
}
function EncodeCode39(b, c) 
{
	var d = ConnectCode_Encode_Code39(b, c),
	e = "",
	a = "";
	for (x = 0; x < d.length; x++) {
		switch (d.substr(x, 1)) {
		case "1":
			a = "wttwttttwt";
			break;
		case "2":
			a = "ttwwttttwt";
			break;
		case "3":
			a = "wtwwtttttt";
			break;
		case "4":
			a = "tttwwtttwt";
			break;
		case "5":
			a = "wttwwttttt";
			break;
		case "6":
			a = "ttwwwttttt";
			break;
		case "7":
			a = "tttwttwtwt";
			break;
		case "8":
			a = "wttwttwttt";
			break;
		case "9":
			a = "ttwwttwttt";
			break;
		case "0":
			a = "tttwwtwttt";
			break;
		case "A":
			a = "wttttwttwt";
			break;
		case "B":
			a = "ttwttwttwt";
			break;
		case "C":
			a = "wtwttwtttt";
			break;
		case "D":
			a = "ttttwwttwt";
			break;
		case "E":
			a = "wtttwwtttt";
			break;
		case "F":
			a = "ttwtwwtttt";
			break;
		case "G":
			a = "tttttwwtwt";
			break;
		case "H":
			a = "wttttwwttt";
			break;
		case "I":
			a = "ttwttwwttt";
			break;
		case "J":
			a = "ttttwwwttt";
			break;
		case "K":
			a = "wttttttwwt";
			break;
		case "L":
			a = "ttwttttwwt";
			break;
		case "M":
			a = "wtwttttwtt";
			break;
		case "N":
			a = "ttttwttwwt";
			break;
		case "O":
			a = "wtttwttwtt";
			break;
		case "P":
			a = "ttwtwttwtt";
			break;
		case "Q":
			a = "ttttttwwwt";
			break;
		case "R":
			a = "wtttttwwtt";
			break;
		case "S":
			a = "ttwtttwwtt";
			break;
		case "T":
			a = "ttttwtwwtt";
			break;
		case "U":
			a = "wwttttttwt";
			break;
		case "V":
			a = "twwtttttwt";
			break;
		case "W":
			a = "wwwttttttt";
			break;
		case "X":
			a = "twttwtttwt";
			break;
		case "Y":
			a = "wwttwttttt";
			break;
		case "Z":
			a = "twwtwttttt";
			break;
		case "-":
			a = "twttttwtwt";
			break;
		case ".":
			a = "wwttttwttt";
			break;
		case " ":
			a = "twwtttwttt";
			break;
		case "*":
			a = "twttwtwttt";
			break;
		case "$":
			a = "twtwtwtttt";
			break;
		case "/":
			a = "twtwtttwtt";
			break;
		case "+":
			a = "twtttwtwtt";
			break;
		case "%":
			a = "tttwtwtwtt"
		}
		e += a
	}
	return e
}
function ConnectCode_Encode_Code39(b, c) {
	var d = "",
	e = d = "",
	e = filterInput(b),
	a = e.length;
	1 == c ? (254 < a && (e = e.substr(0, 254)), d = generateCheckDigit(e)) : 255 < a && (e = e.substr(0, 255));
	return d = html_decode(html_escape("*" + e + d + "*"))
}
function getCode39Character(b) {
	return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%".split("")[b]
}
function getCode39Value(b) {
	var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%".split(""),
	d = -1;
	for (i = 0; 43 > i; i++)
		b == c[i] && (d = i);
	return d
}
function filterInput(b) {
	var c = "",
	d = b.length;
	for (x = 0; x < d; x++)
		 - 1 != getCode39Value(b.substr(x, 1)) && (c += b.substr(x, 1));
	return c
}
function generateCheckDigit(b) {
	var c = b.length,
	d = 0;
	for (x = 0; x < c; x++)
		d += getCode39Value(b.substr(x, 1));
	return getCode39Character(d % 43)
}
function html_escape(b) {
	var c = "";
	for (x = 0; x < b.length; x++)
		c = c + "&#" + b.charCodeAt(x).toString() + ";";
	return c
}
function html_decode(b) {
	var c = document.createElement("textarea");
	c.innerHTML = b.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	return c.value
};
