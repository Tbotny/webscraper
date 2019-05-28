const express = require('express');
const puppeteer = require('puppeteer');


async function getProducts() {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://www2.hm.com/en_us/sale/kids/view-all.html');

    const result = await page.evaluate(() => {

        const products = Array.from(document.querySelectorAll('.product-item'));

        const result = products.map(item => {
            const title = item.querySelector('.link').innerText;
            const price = item.querySelector('.price').innerText;

            return {
                title,
                price,
            }

        });


        return {
            products: result
        }
    });

    console.log(result);

    browser.close();

    return result;
}

const app = express();

app.get('/', async (req, res) => {
    res.send(await getProducts());
});

app.listen(process.env.PORT || 5050, () => console.log('Server ready'));
