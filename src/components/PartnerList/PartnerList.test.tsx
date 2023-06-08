import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PartnerList from "./index";

describe("PartnerList", () => {
  it("renders the partner avatars", () => {
    render(<PartnerList />);
    const partnerAvatars = screen.getAllByAltText("partner avatar");
    expect(partnerAvatars).toHaveLength(4);
  });

  it("renders the partner avatars with the correct dimensions", () => {
    render(<PartnerList />);
    const partnerAvatars = screen.getAllByAltText("partner avatar");
    expect(partnerAvatars[0]).toHaveAttribute("width", "100");
    expect(partnerAvatars[0]).toHaveAttribute("height", "100");
    expect(partnerAvatars[1]).toHaveAttribute("width", "60");
    expect(partnerAvatars[1]).toHaveAttribute("height", "100");
    expect(partnerAvatars[2]).toHaveAttribute("width", "60");
    expect(partnerAvatars[2]).toHaveAttribute("height", "100");
    expect(partnerAvatars[3]).toHaveAttribute("width", "100");
    expect(partnerAvatars[3]).toHaveAttribute("height", "100");
  });

  it("renders the partner list text", () => {
    const text = "Được hơn 1,000 doanh nghiệp dùng để tìm kiếm đối tác hỗ trợ việc khai báo thuế, lập báo cáo tài chính.";
    render(<PartnerList />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});