$(document).ready(function() {

	for (i = 0; i < ptHorzArrow.length; i++) {
		if (i % 2 == 0) {
			ptHorzArrow[i] = ptHorzArrow[i] / viewportWidth * w;
		}
		else if (i % 2 == 1) {
			ptHorzArrow[i] = ptHorzArrow[i] / viewportHeight * h;
		}
	}


    var textLabels = d3.select("#title")
        .attr("x", xTitleText + "%")
        .attr("y", yTitleText + "%")
        .text( function (d) { return "The SEO Opportunity Pipeline"; })
        .attr("font-family", "sans-serif")
        .attr("font-size", "5vw")
        .attr("fill", "white");

    var roundRectGradientUnselected = d3.select("#roundRectGradientUnselected")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");

	roundRectGradientUnselected.append("stop")
		.attr("offset", "0%")
	    .attr("stop-color", "#aaaaaa")
	    .attr("stop-opacity", 1);

	roundRectGradientUnselected.append("stop")
		.attr("offset", "50%")
	    .attr("stop-color", "#d7d7d7")
	    .attr("stop-opacity", 1);

	roundRectGradientUnselected.append("stop")
	    .attr("offset", "100%")
	    .attr("stop-color", "#aaaaaa")
	    .attr("stop-opacity", 1);

	var roundRectGradientSelected = d3.select("#roundRectGradientSelected")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");

	roundRectGradientSelected.append("stop")
		.attr("offset", "0%")
	    .attr("stop-color", "#00486e")
	    .attr("stop-opacity", 1);

	roundRectGradientSelected.append("stop")
		.attr("offset", "50%")
	    .attr("stop-color", "#00aeee")
	    .attr("stop-opacity", 1);

	roundRectGradientSelected.append("stop")
	    .attr("offset", "100%")
	    .attr("stop-color", "#00486e")
	    .attr("stop-opacity", 1);

	var radialGradientUnselected = d3.select("#radialGradientUnselected")
	    .attr("gradientUnits", "userSpaceOnUse")
	    .attr("cx", "50%")
	    .attr("cy", "50%")
	    .attr("r", "60%");
	
	radialGradientUnselected.append("stop")
		.attr("offset", "0%")
		.style("stop-color", "#a1a1a1");

	radialGradientUnselected.append("stop")
		.attr("offset", "100%")
		.style("stop-color", "#4c4c4c");

	var radialGradientSelected = d3.select("#radialGradientSelected")
	    .attr("gradientUnits", "userSpaceOnUse")
	    .attr("cx", "50%")
	    .attr("cy", "50%")
	    .attr("r", "60%");
	
	radialGradientSelected.append("stop")
		.attr("offset", "0%")
		.style("stop-color", "#00afee");

	radialGradientSelected.append("stop")
		.attr("offset", "100%")
		.style("stop-color", "#00446a");


	var ellipseGradient = d3.select("#ellipseGradient")
		.attr("id", "ellipseGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "0%")
		.attr("spreadMethod", "pad");

	ellipseGradient.append("stop")
		.attr("offset", "0%")
	    .attr("stop-color", "#d3d3d3")
	    .attr("stop-opacity", 1);

	ellipseGradient.append("stop")
		.attr("offset", "100%")
	    .attr("stop-color", "#a7a7a7")
	    .attr("stop-opacity", 1);

	for (i = 0; i < 5; i++) {
		d3.select("#roundRect" + (i + 1) )
			.attr("rx", 6)
	    	.attr("ry", 6)
	    	.attr("x", xRoundRects[i] * wPixelPercent + "%")
	    	.attr("y", yRoundRect + "%")
	    	.attr("width", wRoundRect + "%")
	    	.attr("height", hRoundRect + "%")
			.style("stroke-width", wBorderRect + "%");

		d3.select("#txtRoundRect" + (i + 1))
			.attr("x", (xRoundRects[i] + 120) * wPixelPercent + "%")
			.attr("y", yRoundText + "%")
	    	.attr("font-size", "2vw")
	    	.attr("font-family", "sans-serif")
	    	.style("text-anchor", "middle");
	}

	for (i = 0; i < 4; i++) {

		d3.select("#horzArrow" + (i + 1))
			.attr("width", wHorzArrow + "%")
        	.attr("height", hHorzArrow + "%")
        	.attr("viewBox", "0 0 66 49")
        	.attr("preserveAspectRatio", "none")
        	.attr("style", "position: absolute; left: " + xHorzArrows[i] / 1640 * 100 + "%;" + " top: " + yHorzArrow + "%;")

        d3.select("#horzArrow" + (i + 1) + " polygon")
        	.attr("x", 0)
			.attr("y", 0)
		 	.attr("points", ptHorzArrow);

		d3.select("#vertArrow" + (i + 1))
			.attr("width", wVertArrow * wPixelPercent + "%")
            .attr("height", hVertArrows[i] * hPixelPercent + "%")
            .attr("viewBox", "0 0 " + wVertArrow + " " + hVertArrows[i])
            .attr("preserveAspectRatio", "none")
            .attr("style", "position: absolute; left: " + xVertArrows[i] * wPixelPercent + "%;" + " top: " + yVertArrow * hPixelPercent + "%;")

        d3.select("#vertArrow" + (i + 1) + " polygon")
        	.attr("x", 0)
			.attr("y", 0)
		 	.attr("points", ptVertArrows[i]);


		d3.select("#cyllinder" + (i + 1))
			.attr("width", wCyllinders[i] * wPixelPercent + "%")
            .attr("height", hCyllinders[i] * hPixelPercent + "%")
            .attr("viewBox", "0 0 " + wCyllinders[i] + " " + hCyllinders[i])
            .attr("preserveAspectRatio", "none")
            .attr("style", "position: absolute; left: " + xCyllinders[i] * wPixelPercent + "%;" + " top: " + yCyllinders[i] * hPixelPercent + "%;")
			.style("stroke-width", 1.5 + "%");

        d3.select("#cyllinder" + (i + 1) + " path")
        	.attr("cx", 0)
			.attr("cy", 0)
			.attr("id", "path-cyllinder" + (i + 1))
            .attr("d", cyllinderPoints(i));

        d3.select("#txtValue" + (i + 1))
        	.attr("x", xValueText * wPixelPercent + "%")
			.attr("y", yValueText + "%")
		    .attr("font-size", "1.8vw")
		    .attr("font-family", "sans-serif")
		    .style("fill", "#ffffff");

		d3.select("#txtPercent" + (i + 1))
			.attr("x", xPercentTexts[i] * wPixelPercent + "%")
			.attr("y", yPercentTexts[i] * hPixelPercent + "%")
		    .attr("font-size", percentTextSizes[i] + "vw")
		    .attr("font-family", "sans-serif")
		    .style("fill", "#3f3f3f")
		    .style("text-anchor", "middle");
	}

	for (i = 0; i < 5; i++) {
		d3.select("#diagArrow" + (i + 1))
			.attr("width", wDiagArrow + "%")
            .attr("height", hDiagArrow + "%")
            .attr("viewBox", "0 0 84 53")
            .attr("preserveAspectRatio", "none")
            .attr("style", "position: absolute; left: " + xDiagArrows[i] / 1640 * 100 + "%;" + " top: " + yDiagArrow + "%;")
        
        d3.select("#diagArrow" + (i + 1) + " polygon")
        	.attr("x", 0)
			.attr("y", 0)
		 	.attr("points", ptDiagArrow);


		d3.select("#polygon" + (i + 1))
			.attr("width", wPolygon + "%")
            .attr("height", hPolygon + "%")
            .attr("viewBox", "0 0 241 119")
            .attr("preserveAspectRatio", "none")
            .attr("style", "position: absolute; left: " + xPolygons[i] / 1640 * 100 + "%;" + " top: " + yPolygon + "%;")

        d3.select("#polygon" + (i + 1) + " polygon")
        	.attr("x", 0)
			.attr("y", 0)
		 	.attr("points", ptPolygon);

		d3.select("#txtMoney" + (i + 1))
			.attr("x", xMoneyText * wPixelPercent + "%")
			.attr("y", yMoneyTexts[i] * hPixelPercent + "%")
		    .attr("font-size", "1.8vw")
		    .attr("font-family", "sans-serif")
		    .style("fill", "#ffffff");
	}

	d3.select("#reDiagArrow")
		.attr("width", wReDiagArrow + "%")
        .attr("height", hReDiagArrow + "%")
        .attr("viewBox", "0 0 123 152")
        .attr("preserveAspectRatio", "none")
        .attr("style", "position: absolute; left: " + xReDiagArrow + "%;" + " top: " + yReDiagArrow + "%;");

    d3.select("#reDiagArrow polygon")
    	.attr("x", 0)
		.attr("y", 0)
	 	.attr("points", ptReDiagArrow);

	d3.select("#ellipse")
		.attr("width", wEllipse + "%")
		.attr("height", hEllipse + "%")
		.attr("style", "position: absolute; left: " + xEllipse + "%;" + " top: " + yEllipse + "%;");

	d3.select("#ellipse ellipse")
		.attr("cx", "50%")
		.attr("cy", "50%")
		.attr("rx", "48%")
		.attr("ry", "48%")
		.style("stroke", "#7f7f7f")
		.style("fill", "url(#ellipseGradient)")
		.style("stroke-width", wBorderEllipse + "%");

	d3.select("#tap")
		.attr("src","img/tap.svg")
		.attr("style", "position: absolute; left: " + xImage + "%;" + " top: " + yImage + "%;")
		.attr("width", wImage + "%")
		.attr("height", hImage + "%");

	for (i = 0; i < 2; i++) {
		d3.select("#txtNumber" + (i + 1))
			.attr("x", xNumberTexts[i] * wPixelPercent + "%")
			.attr("y", yNumberTexts[i] * hPixelPercent + "%")
		    .attr("font-size", "2vw")
		    .attr("font-family", "sans-serif")
		    .style("fill", "#3f3f3f")
		    .style("text-anchor", "middle");
	}

	d3.select("#txtLeftBottom1")
		.attr("x", 310 * wPixelPercent + "%")
		.attr("y", 825 * hPixelPercent + "%")
	    .attr("font-size", "2.5vw")
	    .attr("font-family", "sans-serif")
	    .style("fill", "#ffffff")
	    .text( "Probability of pages at" );

	d3.select("#txtLeftBottom2")
		.attr("x", 310 * wPixelPercent + "%")
		.attr("y", 875 * hPixelPercent + "%")
	    .attr("font-size", "2.5vw")
	    .attr("font-family", "sans-serif")
	    .style("fill", "#ffffff")
	    .text( "each stage leading to sales" );

	d3.select("#txtRightBottom")
		.attr("x", 1230 * wPixelPercent + "%")
		.attr("y", 865 * hPixelPercent + "%")
	    .attr("font-size", "2vw")
	    .attr("font-family", "sans-serif")
	    .style("fill", "#ffffff")
	    .text( "Unclaimed SEO Revenue" );
});

function cyllinderPoints(i) {

	var index = i;

	var result = "";
	if (index == 3) {
		for (i = 0; i < 8; i++) {
			if (i == 0) {
				result += "M";
			}
			else {
				result += "L";
			}

			result += ptCyllinders[index][2 * i] + "," + ptCyllinders[index][2 * i + 1];
		}
		
		result += "A" + cyllinderRadius[6] + "," + cyllinderRadius[7];
		result += " 0 0, 0 ";
		result += ptCyllinders[index][0] + "," + ptCyllinders[index][1];
	}
	else {
		result += "M" + ptCyllinders[index][0] + "," + ptCyllinders[index][1];
		result += "L" + ptCyllinders[index][2] + "," + ptCyllinders[index][3];
		result += "A" + cyllinderRadius[(index + 1) * 2] + "," + cyllinderRadius[(index + 1) * 2 + 1];
		result += " 0 0, 1 ";
		result += ptCyllinders[index][4] + "," + ptCyllinders[index][5];
		result += "L" + ptCyllinders[index][6] + "," + ptCyllinders[index][7];
		result += "A" + cyllinderRadius[index * 2] + "," + cyllinderRadius[index * 2 + 1];
		result += " 0 0, 0 ";
		result += ptCyllinders[index][0] + "," + ptCyllinders[index][1];
	}

	return result;
}