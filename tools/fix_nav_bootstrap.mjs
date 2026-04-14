import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const CO_EN = {
  "about-us": '<a class="dropdown-item" href="https://vertonext.com/about-us">About Us</a>',
  team: '<a class="dropdown-item" href="https://vertonext.com/team">Team</a>',
  career: '<a class="dropdown-item" href="https://vertonext.com/career">Career</a>',
  newsroom: '<a class="dropdown-item" href="https://vertonext.com/newsroom">Newsroom</a>',
};

const CO_TR = {
  "about-us": [
    '<a class="dropdown-item" href="about-us/">Hakkımızda</a>',
    '<a class="dropdown-item" href="../about-us/">Hakkımızda</a>',
  ],
  team: [
    '<a class="dropdown-item" href="team/">Ekip</a>',
    '<a class="dropdown-item" href="../team/">Ekip</a>',
  ],
  career: [
    '<a class="dropdown-item" href="career/">Kariyer</a>',
    '<a class="dropdown-item" href="../career/">Kariyer</a>',
  ],
  newsroom: [
    '<a class="dropdown-item" href="newsroom/">Basın Odası</a>',
    '<a class="dropdown-item" href="../newsroom/">Basın Odası</a>',
  ],
};

const SOL_EN = {
  ai: '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/ai">&nbsp;Artificial Intelligence(AI)</a>',
  "data-and-analytics":
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/data-and-analytics">&nbsp;Data &amp; Analytics</a>',
  "cloud-and-migration":
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/cloud-and-migration">&nbsp;Cloud &amp; Migration</a>',
  "digital-transformation":
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/digital-transformation">&nbsp;Digital Transformation</a>',
  "server-hosting":
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/server-hosting">&nbsp;Server Hosting</a>',
  banking:
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/banking">&nbsp;Banking</a>',
  telco:
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/telco">&nbsp;Telco</a>',
  insurance:
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/insurance">&nbsp;Insurance</a>',
  healthcare:
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/healthcare">&nbsp;Healthcare</a>',
  public:
    '<a class="dropdown-item bi bi-caret-right-fill" href="https://vertonext.com/public">&nbsp;Public</a>',
};

const SOL_TR = {
  ai: [
    '<a class="dropdown-item bi bi-caret-right-fill" href="ai/">&nbsp;Yapay Zeka (AI)</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../ai/">&nbsp;Yapay Zeka (AI)</a>',
  ],
  "data-and-analytics": [
    '<a class="dropdown-item bi bi-caret-right-fill" href="data-and-analytics/">&nbsp;Veri ve Analitik</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../data-and-analytics/">&nbsp;Veri ve Analitik</a>',
  ],
  "cloud-and-migration": [
    '<a class="dropdown-item bi bi-caret-right-fill" href="cloud-and-migration/">&nbsp;Bulut ve Migrasyon</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../cloud-and-migration/">&nbsp;Bulut ve Migrasyon</a>',
  ],
  "digital-transformation": [
    '<a class="dropdown-item bi bi-caret-right-fill" href="digital-transformation/">&nbsp;Dijital Dönüşüm</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../digital-transformation/">&nbsp;Dijital Dönüşüm</a>',
  ],
  "server-hosting": [
    '<a class="dropdown-item bi bi-caret-right-fill" href="server-hosting/">&nbsp;Sunucu Barındırma</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../server-hosting/">&nbsp;Sunucu Barındırma</a>',
  ],
  banking: [
    '<a class="dropdown-item bi bi-caret-right-fill" href="banking/">&nbsp;Bankacılık</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../banking/">&nbsp;Bankacılık</a>',
  ],
  telco: [
    '<a class="dropdown-item bi bi-caret-right-fill" href="telco/">&nbsp;Telekomünikasyon</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../telco/">&nbsp;Telekomünikasyon</a>',
  ],
  insurance: [
    '<a class="dropdown-item bi bi-caret-right-fill" href="insurance/">&nbsp;Sigorta</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../insurance/">&nbsp;Sigorta</a>',
  ],
  healthcare: [
    '<a class="dropdown-item bi bi-caret-right-fill" href="healthcare/">&nbsp;Sağlık</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../healthcare/">&nbsp;Sağlık</a>',
  ],
  public: [
    '<a class="dropdown-item bi bi-caret-right-fill" href="public/">&nbsp;Kamu</a>',
    '<a class="dropdown-item bi bi-caret-right-fill" href="../public/">&nbsp;Kamu</a>',
  ],
};

function removeDupScript(content) {
  return content
    .split(/\r?\n/)
    .filter((line) => !line.includes("assets/bootstrap/js/bootstrap.min.js"))
    .join("\n");
}

function stripNavActives(c) {
  c = c.replace(
    'class="nav-link active dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Company</a>',
    'class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Company</a>'
  );
  c = c.replace(
    'class="nav-link active dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Şirket</a>',
    'class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Şirket</a>'
  );
  c = c.replace(
    /class="nav-link dropdown-toggle active" (id="solutionsMenu[^"]*")/g,
    'class="nav-link dropdown-toggle" $1'
  );
  c = c.replace(
    'class="nav-link active dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-toggle="dropdown" href="#">Products</a>',
    'class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-toggle="dropdown" href="#">Products</a>'
  );
  c = c.replace(
    'class="nav-link active dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-toggle="dropdown" href="#">Ürünler</a>',
    'class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-toggle="dropdown" href="#">Ürünler</a>'
  );
  c = c.replace(
    'class="nav-link active" href="https://vertonext.com/contact"',
    'class="nav-link" href="https://vertonext.com/contact"'
  );
  c = c.replace('class="nav-link active" href="contact/"', 'class="nav-link" href="contact/"');
  c = c.replace('class="nav-link active" href="../contact/"', 'class="nav-link" href="../contact/"');
  return c;
}

function addCompanyToggleEn(c) {
  return c.replace(
    'class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Company</a>',
    'class="nav-link active dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Company</a>'
  );
}

function addCompanyToggleTr(c) {
  return c.replace(
    'class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Şirket</a>',
    'class="nav-link active dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Şirket</a>'
  );
}

function addSolutionsToggleActive(c) {
  return c.replace(
    /(<li class="nav-item dropdown"><a class="nav-link dropdown-toggle)(" id="solutionsMenu[^"]*")/,
    "$1 active$2"
  );
}

function markSimpleItem(c, old) {
  const neu = old.replace('class="dropdown-item"', 'class="dropdown-item active"', 1);
  if (!c.includes(old)) return c;
  return c.replace(old, neu);
}

function markBiItem(c, old) {
  const neu = old.replace(
    'class="dropdown-item bi bi-caret-right-fill"',
    'class="dropdown-item bi bi-caret-right-fill active"',
    1
  );
  if (!c.includes(old)) return c;
  return c.replace(old, neu);
}

function pageSlug(filePath) {
  const rel = path.relative(ROOT, filePath).split(path.sep);
  if (rel.length === 1 && rel[0] === "index.html") return { lang: "en", slug: null };
  if (rel.length === 2 && rel[0] === "tr" && rel[1] === "index.html") return { lang: "tr", slug: null };
  if (rel[0] === "tr") return { lang: "tr", slug: rel[1] };
  return { lang: "en", slug: rel[0] };
}

function applyCurrentPageActives(content, lang, slug) {
  if (slug == null) return content;
  let c = content;

  if (slug === "contact") {
    if (lang === "en") {
      c = c.replace(
        'class="nav-link" href="https://vertonext.com/contact"',
        'class="nav-link active" href="https://vertonext.com/contact"'
      );
    } else if (c.includes('class="nav-link" href="../contact/"')) {
      c = c.replace(
        'class="nav-link" href="../contact/"',
        'class="nav-link active" href="../contact/"'
      );
    } else {
      c = c.replace('class="nav-link" href="contact/"', 'class="nav-link active" href="contact/"');
    }
    return c;
  }

  if (CO_EN[slug] && lang === "en") {
    c = addCompanyToggleEn(c);
    c = markSimpleItem(c, CO_EN[slug]);
    return c;
  }

  if (CO_TR[slug] && lang === "tr") {
    c = addCompanyToggleTr(c);
    for (const anchor of CO_TR[slug]) c = markSimpleItem(c, anchor);
    return c;
  }

  if (SOL_EN[slug] && lang === "en") {
    c = addSolutionsToggleActive(c);
    c = markBiItem(c, SOL_EN[slug]);
    return c;
  }

  if (SOL_TR[slug] && lang === "tr") {
    c = addSolutionsToggleActive(c);
    for (const anchor of SOL_TR[slug]) c = markBiItem(c, anchor);
    return c;
  }

  return c;
}

function walkHtml(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkHtml(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

let changed = 0;
for (const p of walkHtml(ROOT)) {
  if (p.includes(`${path.sep}tools${path.sep}`)) continue;
  const raw = fs.readFileSync(p, "utf8");
  let c = removeDupScript(raw);
  c = stripNavActives(c);
  const { lang, slug } = pageSlug(p);
  c = applyCurrentPageActives(c, lang, slug);
  if (c !== raw) {
    fs.writeFileSync(p, c, "utf8");
    changed++;
    console.log("updated:", path.relative(ROOT, p));
  }
}
console.log("done, files changed:", changed);
