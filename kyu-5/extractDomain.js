// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  let domain = url.replace(/^(https?:\/\/)?(www\.)?/, "");
  domain = domain.split("/")[0];
  domain = domain.split(".")[0];
  return domain;
}
