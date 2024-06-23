function createSlug(str) {
    const a = 'àáâäæãåāąčćĉēėęëìíîïĩīįžżšśùúûüũūųűñňóöôőòóöôőõøœđð`¨ˆ位的';
    const b = 'aaaaaaaaaaaaaaceeeeeeeeeeeiiiiìiıžżssssuuuuuuuuuuuuuñnnnnooooooòóööööõøøđdd\"\'\^¨`';
    const s = str.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g, function(c) {
      return b.charAt(a.indexOf(c));
    }).replace(/ +/g, '-').replace(/^-|-$/g, '');
    return s;
  }
  
  export default createSlug;