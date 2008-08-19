if (!window.polygonPlacemark) {
  alert('polygonPlacemark not defined.  ' +
        'Run the "Create Polygon" sample first"');
} else {
  // If polygonPlacemark doesn't already have a Style associated
  // with it, we create it now.
  if (!polygonPlacemark.getStyleSelector()) {
    polygonPlacemark.setStyleSelector(ge.createStyle(''));
  }
  // The Style of a Feature is retrieved as
  // feature.getStyleSelector().  The Style itself contains a
  // LineStyle and a PolyStyle, which are what we manipulate to change
  // the line color, line width, and inner color of the polygon.
  var lineStyle = polygonPlacemark.getStyleSelector().getLineStyle();
  lineStyle.setWidth(lineStyle.getWidth() + 2);
  // Color is specified in 'aabbggrr' format.
  lineStyle.getColor().set('66ff0000');

  // Color can also be specified by individual color components.
  var polyColor = 
    polygonPlacemark.getStyleSelector().getPolyStyle().getColor();
  polyColor.setA(200);
  polyColor.setB(0);
  polyColor.setG(255);
  polyColor.setR(255);
}
