export function getLastString(str) {
  // Kiểm tra xem biến str có phải là một chuỗi không
  if (typeof str === "string") {
    // Tìm vị trí của dấu "-" cuối cùng trong chuỗi
    var lastDashIndex = str.lastIndexOf("-");

    // Kiểm tra xem chuỗi có chứa dấu "-" hay không
    if (lastDashIndex !== -1) {
      // Trích xuất chuỗi cuối cùng bằng cách sử dụng phương thức slice()
      var lastString = str.slice(lastDashIndex + 1);

      // Trả về chuỗi cuối cùng
      return lastString;
    } else {
      // Nếu chuỗi không chứa dấu "-" thì trả về null hoặc giá trị mặc định khác tùy vào yêu cầu của bạn
      return null;
    }
  } else {
    // Nếu biến str không phải là một chuỗi thì trả về null hoặc giá trị mặc định khác tùy vào yêu cầu của bạn
    return null;
  }
}

export function convertToSlug(text) {
  if (typeof text === "undefined" || text === null) {
    return "";
  }

  if (typeof text !== "string") {
    text = String(text);
  }

  text = text.toLowerCase().trim();
  const from =
    "àáäảãạăắằẵẳẳâầấậẩẫèéẹẻẽêếềểễệìíịỉĩòóöỏõọôồốổỗộơờớợởỡùúüủũụưừứựửữỳýỵỷỹđ";
  const to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";

  for (let i = 0, l = from.length; i < l; i++) {
    text = text.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  return text
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
