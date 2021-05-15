import React from "react";
//  { PureComponent }

// import imageToBase64 from "image-to-base64";

import jsPDF from "jspdf";

// export default class PDFGenerator extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgData: "",
//     };
//   }

export default function PDFGenerator(props) {
  const jsPdfGenerator = () => {
    var doc = new jsPDF("p", "pt");

    var url = "https://petgohome.s3-us-west-2.amazonaws.com/" + "dog.1.png";

    doc.text(
      50,
      100,
      String(this.props.details.type + " - " + this.props.details.record_type)
    );

    doc.text(50, 130, String("Gender : " + this.props.details.gender));
    doc.text(
      50,
      160,
      String("Date : " + this.props.details.missing_date).substr(0, 17)
    );
    doc.text(
      50,
      190,
      String(
        "location" +
          this.props.details.location +
          " (" +
          this.props.details.latitude +
          ", " +
          this.props.details.longitude +
          ")"
      )
    );

    doc.addImage(this.state.imgData, "png", 0, 0, 232, 287);

    doc.setFont("courier");

    //save the doc
    doc.save("generated.pdf");
  };

  return (
    <div>
      <button onClick={jsPdfGenerator}>Generate PDF</button>
    </div>
  );
}
