const { calcQuad } = require("./calc");

const { calcPyth } = require("./calc");

const { calcLine } = require("./calc");

const puppeteer = require("puppeteer");


//varibel som håller var sidan ligger
const filePath = "http://127.0.0.1:5500/index.html";


test("testar om falsk rot ger false i return", () => {
    expect(calcQuad(2, 2, 50)).toBe(false);

});

test("testar om skärningspunkt i y = x^2 är endast 0", () => {
    expect(calcQuad(1, 0, 0)).toBe("0 0");

});

test("testar om normal 3 4 5 triangel funkar", () => {
    expect(calcPyth(3, 4, "")).toBe("3 4 5");

});

test("testar om den ger false när alla värden är insatta i pythagoras (inget att räkna ut)", () => {
    expect(calcPyth(3, 4, 5)).toBe(false);

});

test("testar om räta linjen fungerar", () => {
    expect(calcLine(1, 2, 3, 4)).toBe("1 1");

});


test("testar kvadratiska funktioner på hemsidan", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 25,
        args: ["--window-size:1920, 1080"]
    });

    const page = await browser.newPage();
    await page.goto(filePath);

    await page.type("#quad1", "2");
    await page.type("#quad2", "0");
    await page.type("#quad3", "-2");

    await page.click("#quadbutton");

    
    const result1 = await page.$eval("#quadAns", el => el.textContent);
    await expect(result1).toBe("x1 = 1 x2 = -1");

});


test("testar pythagoras på hemsidan", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 25,
        args: ["--window-size:1920, 1080"]
    });

    const page = await browser.newPage();
    await page.goto(filePath);

    await page.type("#pythA", "3");
    await page.type("#pythB", "4");

    await page.click("#pythbutton");

    
    const result1 = await page.$eval("#pyth1", el => el.textContent);
    await expect(result1).toBe("3");

    const result2 = await page.$eval("#pyth2", el => el.textContent);
    await expect(result2).toBe("4");
    
    const result3 = await page.$eval("#pyth3", el => el.textContent);
    await expect(result3).toBe("5");

});


test("testar räta linjens funktion på hemsidan", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 25,
        args: ["--window-size:1920, 1080"]
    });

    const page = await browser.newPage();
    await page.goto(filePath);

    await page.type("#x1", "1");
    await page.type("#y1", "3");
    await page.type("#x2", "2.5");
    await page.type("#y2", "0");

    await page.click("#linebutton");

    
    const result1 = await page.$eval("#lineAns", el => el.textContent);
    await expect(result1).toBe("y = -2x + 5");

});


test("testar allt på hemsidan, samtigit", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 25,
        args: ["--window-size:1920, 1080"]
    });

    const page = await browser.newPage();
    await page.goto(filePath);

    await page.type("#quad1", "2");
    await page.type("#quad2", "0");
    await page.type("#quad3", "-2");

    await page.click("#quadbutton");

    
    const result1 = await page.$eval("#quadAns", el => el.textContent);
    await expect(result1).toBe("x1 = 1 x2 = -1");



    await page.type("#pythA", "3");
    await page.type("#pythB", "4");

    await page.click("#pythbutton");

    
    const result2 = await page.$eval("#pyth1", el => el.textContent);
    await expect(result2).toBe("3");

    const result3 = await page.$eval("#pyth2", el => el.textContent);
    await expect(result3).toBe("4");
    
    const result4 = await page.$eval("#pyth3", el => el.textContent);
    await expect(result4).toBe("5");


    
    await page.type("#x1", "1");
    await page.type("#y1", "3");
    await page.type("#x2", "2.5");
    await page.type("#y2", "0");

    await page.click("#linebutton");

    
    const result5 = await page.$eval("#lineAns", el => el.textContent);
    await expect(result5).toBe("y = -2x + 5");
});