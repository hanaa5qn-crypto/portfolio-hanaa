"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const row1 = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0wFey_KNZc6HptZKxUWeFSNbFLE6UD23rWzgU6Cwakw2uCgQPblk8F1DaWvUpuYT3-FlQI-esx50ooWVlNWw1j0dTLqNfjSEIvZnGLz7MDIjplorzFeCFlwicykrjRyLRoJ_3LgVKfnkDe14R7g0n3b_JreOfMLykqhq6g-RLaWy_91Z7CGRE5a5YTvv7LHBXrL7pz8zQCE2TqXXkZu3MYMPsD15_IVJk3PYbrXiYl1EINdCX4AWrZyeYpEZFke6sQJXDGFFdpFwF",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAd8qHe2k-fKgiInuOu0-AElFp7i0-bB-ROcW6wtNKSCZj1epBXtnOP5bez8T2yM9vM2GxKwz4GhgKlqKPV7mviKQSbo51key_6bhFMbi0KxY1tE63ujrr38zU5v9qvodvS9YVBCJLxMUN-U9aQs7lkmNIGT2-t6OhqFQvo-imgmrQvBlAmzWGBx-wkj3TRgtzdL4DyIZto48bkgHaATW2U6AZlp81a8KNQMpmW3WsljPcXibtlFjyckfw514YzLOPj0TbrCIRKYIqU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDtKeOWm4NBwG0kstAV6FvSoEeSLiP7I-kXNaVHEzARpaWnMldQ7stH9j1XPZcyQiirKsS3ucamKGuJiRBK3xvSFlWRdNo2xMRIjYWXRIZD4ZiFBxkg9cM4BVIC91yLKU5Ob2hvLBdV8BMuAb3CG39OIJnvie-ZVHr7HzyO2c0dseCTdA8DrXJI-mkSZ0zQm82hQGb86KruINPcs9DByPyPm75OOkTaekPIogV0xF8L3HMLuS-9In7K4yahGAWVMM-qkLW6NoGUov27",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHAQ4Y-SvfBw68f_sfE8u4_ZRKOfpwRTpUy0kMt3N4JynELkJVgAF80b78rfdwGWllsp0Tim1JFwIs0LnuP2yC6HKwmJjzdncuxVD9G50hg1IYJRevZfDy9YFMDwhOB_oYISSpc6locls-zaAwBKdrqh22DuiyOUKaflXSTQOdtWbvL2XHK8Y6d62uUYdT1xP6xVjTRDaeDXC1gXXrkBRC5XHz5NyX3QAmkEZaL5Wz1h0kgffe0rKGwPGLQHxPa2ssiApHroaOi-fs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDF4BGss0xY2mqSOWwRQ0X9ilN0GSwQBS9M_IA5wGuJuBTImxDjQRODwDd_EeTi4piM2Yz8sjzyIW0M2tHrP2KRQCkYUpXt9oDh9aZQstjMo3WWJWwY1Aqi3Xdc7h44N6QI0P0KI0LokT-WZLzKD25V0KEBNhZ-Oe5pBxwo_OHfddmQpjlpeaQZT46-ubVOydROSpTavUqmlCLPTLNcgQVC2JDP-j1J-8yIQufByqHnYjHXrGm21GbHieS4YsLxzRtUJM8H55G8xNyo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFz-ZJZPkn9CJ-ix1RwsYQZYxB6vKm8Y74Qa01rEXdPHIuqyofQqSxd6pPmbFkge6h25PFBC8tK7YPziuYRfdb8WnPmquxnnftWQiQQ50P1WWdv4MKHbusb2IFNTPY3VIigOCGqCtofzgmK1W36CnkXRRjsZcm2zMg016RBOchaTYvhJRMc7NmW42qgybCUcSlUmNvG5v5AUYtPb5ZcmH6r0pDk5lOYStLWt0jYGthIMr8pZd3yQWGzlsh2YZmm8k16hjTDcqtSdm",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAU5iaqkNuqhdaGHUP6tf0Wd4aHd4qyAOJgEYX0TB2nWU3FlorepUXIQeu39ARlO8ZvmMbJuwKRa7vDw7WITP2RCOA7ddRh18nDN3pZeg_OQomcow4nb96uEv_5Wv4iZ7EL20TDFqF_tLSa_r75NACJjv115NimloE_1VQFXC1D03vOgYEOU3IWMz1Dgsxcs3kS46s_FVN8VS4aLhzsV8QCxmwI7TjNZkdoz-BGe3Vw6hr14klU8uBw4iPVrWTe1gkSGPAGm8uSEpCQ",
];

const row2 = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBE8QyBFHQlDCrr9BrP4jsFchpKl1wU9LjVWdEfjxSfSNGv1hPxXA4_G7PD6CwGPRUXLlhBYz_uhwUMuIkujJhKgv3A5nPpp88RubIvyaHzCJ2-RPJhfQaCrwmpkxWrfOFF9xsiZmU6-6Ro8l0AtkIGOdrVoX3sfafhPVnxx4mIcN2CwPdq_b9RXiLaPhqT5iM45aD2huJ3pjYD1RFQEWv82AiXtEUv_rbg-d5lqOW_TJEOudOlXPbIh5OgOC0SdQYLWP7hrwdJ9Pw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9lgxBh2LXzLs3zEu32lYdvfsPgool2VMsTl0ccOkSOVbXyUrYv9s78LlOQxEZTlgjYmQyPLO5IAf0U_SMVcmgGzgxBBKz3hzfmqwhgz6iqu2Wa28dZi-7gBcoYz5381PDdbUVvecyfBFADQlwuz3T834Begb6focVkzJL12QTaWirUbNdF755HJINUeyzewiMHdRbRH4KTD0qtaZmPBNZtJ5SxT5NJsTGM37c-ocYYW7XHvdPsvZIrcoF62XjxHtzPiagZ1PLjBDx",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDG59EJBQDo8eRlcjwOB07-yiXKQxBrKaAvrsXKEPLhOjg0ySpm7VcYyxfDFuaYbD0JZQYUiq8yIY4HjUs_ENfnemMG1CN2RRz1kTCQVORgvzziwGJPjhj3sPyTwj7Qs0nCjmSlxeMnmileJHeYcNO3hvK2c09en3qjdifoqiDX_nJNGsKJU42PXNYkwSWnd0RoGsSUp86M9nPt5SUyQlGd-a25kJ4PatdNuTmeLVJRYJxLlSBBHYEQch65X3Yl4V4yeFyt33NoKUZL",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfrWPbIVwxJ7sH2OiC7wTOK2g6XIkBTcTBvTrPSjyzC0WFxvIVDNKh1uaBO_BPbw5Kjxs1uuZW-qfjrcj18xfLWWDuqm2Y109GWSDz7iop798Ef9vEOR2PwpxBq3q7RaVWuVRkGzM1wCAKZpzOYwjm5XxzwI1lbOQJ51kBVvXSyw8ixnmySzbajYB3S-YEPT5uSuAEpD_J_3lKEq4W65Ul0QBPUi8vBLcEAEHhhIIqq4y9EUXeiu8pCHeZGC74jtUMzGex9WjB7km",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCryPV8Cnyn3x5bm8Fnnc5k3PszsEAzDl6rxMtRuvIPl_ckZF3SNqg37JftGvaLFbtR3_4uoc2ZSRDmwaVM2Sk19UDr1ndUGoHIdqg6wYWVeSkzp8VipFFiWSAo9inqRBk6__u5jOvug1aSPnxauEW93U2S62x24VkwD6Frrn1hFp1Umwpdi3r28ioMo1BB5aBEPFkWQ3ZKMj4_ZirRin827teuJ3IrnXdwgoKp9PO2m3OHtAPWruGZlJx9rU0mndXSypQvl7nIqARQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAy7Cj-4o5O2ulmA689Z79yZoIBsqnmFH36QiwUKRreJOFhOj3hJ0qhaS2DLcrzgg6NSgeb5zX8EJWCdO9uPOLkemHI0l6eCfAUfUnvZNe0-ChLJuBVnaPeGshJOqs6JnP67VEG7KmbPwdVKov9u14tEzbcjmz96Crq3g_qP7DubVA2N5g5gamtkQ0ttOHH42x26ZJfQPdp3DM5WgOzwTwUH9HLWECEFsgOAqMRoEEqYAWo5tmRVxea3yGrSF6MMMJnkLedZbR9C3u9",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPFK6wC55Tulomgkw-VFVSbdIG_psc6wQ0SAozWKRPHL6Zdj5YQ6VJmr8yIbxf_buiFd_qyBLhJcPoUz2v1_RFT_X3GRfpZQ7yYbAhL6osZ1HAE54LCWAZPeAUWO93bJe8asS21DNLD_K5Z7Xu1Hr1uD6sz9ESk83fURaioAOxhLSLQIKhtXrBexXCZxWaVDtYWJBPpKVR8JNuRvw94nSGvfmYs7a1FZgPHf9VPoXj4AGE5wKwh8sNh2Ey5rnN3mi1uyDWbpe1oyM4",
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [150, -250]);
  const x2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-150, 250]);

  return (
    <section
      ref={containerRef}
      id="marquee-section"
      className="py-16 md:py-24 overflow-hidden bg-surface-container-lowest border-y border-line"
    >
      {/* Row 1 */}
      <div className="marquee-container mb-6">
        <motion.div style={{ x: x1 }} className="marquee-scroll-wrapper">
          <div className="marquee-content gap-6 pr-6">
            {row1.map((url, i) => (
              <div key={`row1-${i}`} className="marquee-item">
                <img alt={`Project showcase ${i + 1}`} src={url} loading="lazy" />
              </div>
            ))}
            {row1.map((url, i) => (
              <div key={`row1-dup-${i}`} className="marquee-item">
                <img alt={`Project showcase ${i + 1} dup`} src={url} loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="marquee-container">
        <motion.div style={{ x: x2 }} className="marquee-scroll-wrapper">
          <div className="marquee-content reverse gap-6 pr-6">
            {row2.map((url, i) => (
              <div key={`row2-${i}`} className="marquee-item">
                <img alt={`Project showcase ${i + 8}`} src={url} loading="lazy" />
              </div>
            ))}
            {row2.map((url, i) => (
              <div key={`row2-dup-${i}`} className="marquee-item">
                <img alt={`Project showcase ${i + 8} dup`} src={url} loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
