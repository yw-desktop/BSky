import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WebService {
  private webs = [
    {
      name: "百度",
      url: "http://www.baidu.com/xxx/adf.wer/wer/qwerqw",
      desc:
        "全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网 页数据库，可以瞬间找到相关的搜索结果。",
      price: 123456666.14,
      created: 123457888781,
      ename: "bai du",
      level: 1
    },
    {
      name: "腾讯",
      url: "http://www.tencentx/adf.wer/wer/QERQR",
      desc:
        "腾讯网从2003年创立至今,已经成为集新闻信息,区域垂直生活服务、社会化媒体资讯和产品为一 体的互联网媒体平台。腾讯网下设新闻、科技、财经、娱乐",
      price: 154788797878,
      created: 14457888781,
      ename: "teng Xun",
      level: 2
    },
    {
      name: "阿里巴巴",
      url: "http://www.aliBABA.com/xxx/adf.wer/wer/ASDFAFD",
      desc:
        "阿里巴巴(1688.com)批发网是全球企业间(B2B)电子商务的著名品牌，为天下网商提供海量商机 信息和便捷安全的在线交易市场。从海量的商品中甄选热销新品、优质好商，为买家采购批发提供风向标。 优质折扣货源，爆款清仓开抢，进货更省心，采购批发就上阿里巴巴",
      price: 455456666.14,
      created: 123457888781,
      ename: "ali baba",
      level: 3
    },
    {
      name: "facebook",
      url: "http://www.baidu.com/xxx/adf.wer/wer/qwerqw",
      desc:
        "Facebook（中文译为脸书或者脸谱网）是美国的一个社交网络服务网站 ，创立于2004年2月4 日总部位于美国加利福尼亚州门洛帕克。2012年3月6日发布Windows版桌面聊天软件Facebook Messenger。主要创始人马克·扎克伯格（Mark Zuckerberg）",
      price: 78879875.14,
      created: 133457888781,
      ename: "facebook",
      level: 1
    }
  ];

  getWebs() {
    return this.webs;
  }

  constructor() {}
}
