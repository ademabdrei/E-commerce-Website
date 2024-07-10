const categoryNav = document.getElementById("category-nav");
const itemGrid = document.getElementById("item-grid");

const categoriesData = {
  electronics: {
    Computers: [
      {
        model: "Dell XPS 13",
        image:
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9340/media-gallery/silver/touch/notebook-xps-13-9340-t-sl-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=679&qlt=100,1&resMode=sharp2&size=679,402&chrss=full",
        specs:
          '11th Gen Intel Core i5 processor, 8GB RAM, 256GB SSD, 13.3" FHD+ display',
        price: 999,
      },
      {
        model: "HP Spectre x360",
        image:
          "data:image/jpeg;base64,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",
        specs:
          '11th Gen Intel Core i7 processor, 16GB RAM, 512GB SSD, 13.3" 4K OLED touch display',
        price: 1499,
      },
      {
        model: "Lenovo ThinkPad X1 Carbon",
        image:
          "https://dlcdnwebimgs.asus.com/gain/39630061-6b25-4e76-b566-a41314d537f0/w800",
        specs:
          '11th Gen Intel Core i7 processor, 16GB RAM, 512GB SSD, 14" WQXGA display',
        price: 1799,
      },
      {
        model: "Apple MacBook Pro 16-inch",
        image:
          "https://www.apple.com/v/macbook-pro/ak/images/overview/closer-look/3d_viewer_pt_open__dr7t682bocia_large.jpg",
        specs:
          'Apple M1 Pro or M1 Max chip, up to 32GB RAM, up to 8TB SSD, 16" Retina display',
        price: 2499,
      },
      {
        model: "Asus ZenBook Pro Duo",
        image:
          "https://dlcdnwebimgs.asus.com/gain/39630061-6b25-4e76-b566-a41314d537f0/w800",
        specs:
          '10th Gen Intel Core i9 processor, 32GB RAM, 1TB SSD, 15.6" 4K OLED main display, 14" 4K ScreenPad Plus secondary display',
        price: 2999,
      },
    ],
    "Mobile Phones": [
      {
        model: "iPhone 13 Pro",
        image:
          "data:image/jpeg;base64,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",
        specs:
          'A15 Bionic chip, 6.1" Super Retina XDR display, Triple-camera system, 5G connectivity',
        price: 999,
      },
      {
        model: "Samsung Galaxy S22 Ultra",
        image:
          "data:image/jpeg;base64,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",
        specs:
          'Snapdragon 8 Gen 1 processor, 6.8" Dynamic AMOLED 2X display, Quad-camera system, S Pen support',
        price: 1199,
      },
      {
        model: "Google Pixel 6 Pro",
        image:
          "hdata:image/jpeg;base64,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",
        specs:
          'Google Tensor chip, 6.71" QHD+ OLED display, Triple-camera system, 5G connectivity',
        price: 899,
      },
      {
        model: "OnePlus 10 Pro",
        image:
          "data:image/jpeg;base64,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",
        specs:
          'Snapdragon 8 Gen 1 processor, 6.7" QHD+ AMOLED display, Hasselblad-tuned quad-camera system, 65W fast charging',
        price: 899,
      },
      {
        model: "Xiaomi 12 Pro",
        image:
          "data:image/jpeg;base64,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",
        specs:
          'Snapdragon 8 Gen 1 processor, 6.73" 2K AMOLED display, Triple-camera system with 50MP main camera, 120W fast charging',
        price: 999,
      },
    ],
    "Home Appliances": [
      {
        model: "Samsung Family Hub Refrigerator",
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACBwQFBgMBAP/EAEQQAAEDAgIECAkKBQUAAAAAAAEAAgMEEQUSBhMhMSJBUWFxcpGyBxQyM1OBk7HRFSMlRXN0gsHC4UJikqKzFzQ2Q1L/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERQQL/2gAMAwEAAhEDEQA/AGddc4T85P8AafpaqB+l9C3/AKp+xvxVPU+EOkpaiRkdDUSBzs187RbYBz8ijTeXXhOxYAeEqnP1ZP7VvwXv+pEB+rZvaj4IN6w3F1xp3DIQT/G/vFYpvhFg4sNm9oPgvIfCBT5TbDpzw3HbI3jcVMNMC6+usOPCDCfq+b2g+CNunsTjYYfLf7QfBaw1sqjzY67O8ETdryFlKfTBlXUQU3iEsZlmY0Oc8WF3DmWqGYG+rbfrfsmGpNNI+OZlibE2I5VcqiiL9azgDyh/F+yvUZI6SmBYS2FvrWQqYnNr6pr94kHdamJMGRMJeQFhKxzZcSrHs3awdxqjVRmxo2xrqGow1VHNrF7Tt4H4ne8rs1qjzOMWHSyMJBbmII6yqJTWLsxqxsWkjnuDc8redxACKTSV0T8uskf/ADMcCCoGDgrfpeg+8x94Jtt3JMaF1DqubDZ3kkuqoyM2+2YJ0N3KwHEPnGdYK6VNF5xnWCuUoTMkJcGiR8mcjaHN2BZOtjDMUrGtbYaxuz8DUwal7Ym7Rc22NCX+IOccVrDIAHawXA6jVFAEYCAFECqgwoGIAnBKoDja/vFTgVAxE/QdXa/kP95Qaip0lw181zJQRs1Jj1WpBdJs8rNew2gbLLvT6VYZFne59LPG8DVscyMFmzm4uW+/mW2ooaTxGMiCEPyCw1QPJt5FKbBR61vzdLYjcYBbedvN61znnJkalzhUaDuD5cOcLWdVsIt1gnW3ckvofYV1GBu8ebu64TpC6xkcfnG9YK4VPH5xvWCuFKFU2op9RnFyDxlp2rB4nIJMVrHtBAL27+o1MGukcyA6uwcdlzxJd4o4fK1ZYggPaBbqNQACjBXAFEHIO4Kh1Z+iZ+h3eUgOUSqs7Cp2k2BzD+5AvrHkTj0OxbRenwGgbiFXhzZhA1r2yC7gQTe4WHfiOKya/PipcaiEwy3YOE0tYwjZzRsHqVT8ksv/ALlv9KgYuhTmuqsPLCCw1jMpG62cWTtDhsCRmgoEc2Fxhwdlqom3HHwmp2sA1zXWF82/1Fa4JUflt6QrdVDPON6QrdShQ19fBro4s5yna57RsAWCxCSB2K1vizs0esG0335G3TMr8OLIgI8NaCOPXflcJY6RtqKfGKhrYm5rtu0ndwRxgqAA5GHKJJr2usx0Dxy7Qhz1XJD2lUTw5ccgnpHRE2Di4X/Eo+eq/wDMXaUMMtXq9kcW88Z5Sg+GDRemf2BGMFi9O/sC9E9b6KLtKIT13oYu0oLzRanbSYphsLXFw8ciNz1wnWyKzw+52G9vUR+aRGBVNc3SXDY/F4zH43D84CbeW1PYOqPRs7VYJDPLb0hW6o43T61l422zDjV4pRjq8cBJ7TI20jqhzM7oThrvJ9aTem//ACWq6Gd0IqpDkQeo9yvblBJD0ML+AOk+9cgdqGE8AdJ96CaHow9RQSvWk3QXWAv+ncM++Q98J6Z23Db8I7gkHgBPy9hf32D/ACNT2b51vW/SVeIlx+cb0hWygUUbXOzu3jcp6lH/2Q==",
        specs:
          '22 cu. ft. capacity, 3-door French door design, 21.5" touchscreen display, Wi-Fi connectivity',
        price: 2799,
      },
      {
        model: "LG ThinQ Washer and Dryer Set",
        image:
          "data:image/jpeg;base64,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",
        specs:
          "Washer: 5.0 cu. ft. capacity, AI-powered controls, Steam technology. Dryer: 7.4 cu. ft. capacity, Smart Diagnosis, Steam technology",
        price: 1799,
      },
      {
        model: "Whirlpool Smart Front Load Washer and Dryer",
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgQFAgMHCAH/xAA5EAABAwMBBAYHBwUBAAAAAAABAAIDBAURIQYSMWETMkFRcXIHIjSRobHBJUJSYoHh8BQVIzWCM//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7ihCEAhV1wuUVIC0evL+HOg8VpbdYoaFlTX1MEDXaF8rwxuddMlBboVJDtHbpnlrK+jIH3hVREH3Oyp0lU5jcgNOoHvQTUKnbfIJJZIYi10kZIxnGcYzjwyEnXT0vWy2Xittk1quEktHKY3ui6Mg8xlwQdJQkrZf0jWvaaqqaWio62KanYHyCoa0DBONMOKcYH9LG14GN4Zwg2IQhAIQhApX3JukzQcDDT8Ap1A1slBEyRjXtxwcM9qrdon4u0o/K35BWNqOaCE/l+qI2uoKJ/XpIT/ytlSYxCTM9sTM9YuwB+pUaqqniU09LuiRrQ6WV4y2Fp4afecewfqezKztFtJa9m2tnrJXuqXD1HFvS1Dxy7GDw3Wqi7igozUSSR1sbt4ENaJGkNycnHiUjbS+ir+8X2tujLyIHVUvSGN1Jvbp00yHj5KLT+l2glnDJYrpGwnG+8tcB4jeTta7xDcaNs9FURvhcfVkjboD2hzeznwKilzY3Yao2TrqqrbcIqwzQiPdMRixqDnO87uXUrf7HD5QqIP6RuSMOHEZzj9lfUHskXkCCQhCEAhCECTtIM3mbXGGtPwVlQzNprI2ok6kUTnu8Bkqv2k/20x5N+QUp2W7OR47dwHt0MgB+GUGivqBZbBU19aAXwRPqajH35MZIHwaOQC851FyuF3rp6ysmD5p3Euf+HkO4DgF6F9IlLJVbC3pkILpP6UvAHaGkOI9wK88UAbkksAIaA3HDT9sojF0YpyxuN7T1k5ej25yUF2iY4kQ1DhFK3OnHDXY5E8e7KWnQuqqoxxtwXuwMdiZbRSl12p4omkummaBjsy4a/EfFB2aFpacE8Bjx/n1TDQ+yReQKjlG6c8NVeUPskXkCKkIQhAIQhAm7RYN1mB7mEe5WENMarZ/+nDt0ywuaHD7pOcFV20R+2JfK35BXVqH2dB5fqg+W2YVtCx0jRvYLZWHXBGhB/XIXG9tPR9WWerkqbXTvqbc477OjBc6HXquA1x3O9+q69UxzUVS6spWGRj/AP3hbxJ4bzefeO3GmvGXS1tPVx79PK1w4EZ1B7jzQeftn4mPqf8ADG6SbGGsYwudngumbFbKTUMguNyj3JhnoYTxZkY3j3HGgHM55PZcddSoFZXRxZjj/wAkx4Mafn3INFY7M0cQ49Z3hwH85K9oPZIvKl6GNw3nynekecuKYaH2WLyoJCEIQCEIQI208m5epRgn1W/IJgs5zbYPL9SqDalk0d2kmfA7oHhobIRpwGmVeWU/ZVN5fqUE1wUGqttLUSdK+Pdl4dJGSxxHdka4U0uWl8rG9ZwHiUVANsZwdPUOHcZXLJlNFA3EbA1bH1lMCc1EOfOFofWQOPqzMdya4FEZb4cOqRrjBCvKD2SLypcdMD1Y5neWJzvkEx28EUcIcCDuDIIwQgkIQhAIQhBg5jXNLXAOadCCMgqMy10TBhtOwD8Izj3KYhBE/ttF20dOfGIFZtoqVvVpoR4RhSEIMGxtb1WtHgFljmvqEHzHNAGF9QgEIQg//9k=",
        specs:
          "Washer: 5.2 cu. ft. capacity, Load & Go dispenser, 12 wash cycles. Dryer: 7.4 cu. ft. capacity, Wrinkle Shield option, 9 dry cycles",
        price: 1499,
      },
      {
        model: "Bosch 800 Series Dishwasher",
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAABQYBBAcCA//EAD8QAAEDAwEDBwYLCQAAAAAAAAEAAgMEBREhBhIxBxNxcoGxwSJBUWGRwhQVFiMyQmJjk9LiJTM0NVJzodHT/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBMf/aAAwDAQACEQMRAD8A7ihCDoEAhSt721oqLeioMVc40y0/NtPT5+z2pRaNpq6rhklqZGh4mc0YcWjAx5h0qUdBQpOK8VLzhszPxf0FaTdvbQHuZJfqJj2ktc11S0YIOCNYwlFyhR7duLGcY2htufQa2DxIWxHtZQy4+DXW3TE8A2pgdn2ShUVCEikutfF9KlaeweDyt60V766KQyRc25j8Y14Y9alG+hCFQLy8BzHNPAjBXpYPAoOIthAe5rRoDgLzG97N6NhDcSOPct6KPMjuse9aUg3aqQfeOUw0xo3y7w+cCjKvY+NtVVS1dtvc8ckznl1DPH5WSTkAtKraZxBCorZIcDUqsuVm12VrebNNtfG3OodTxOcO3AXp2xVC+OOptst3Aa9rg2qgjzkHP1Su5MkPN6nzJPdZ8tKoW1d4laSBvaKh2CrX1jK7fzljmf5yoSqeS4qv5MvoXHrR+8pFq4QhCKFg8CsrB4FByemZmV3WPelVXpXzD7x3gnVJ+8d0lJbgcXGf+4fBTDX1pz5QVLbBo1TNLq8KqtY8kLTJu47sXYkFzk4p1UO3Y1N3KTUqBRPxKsOTLVly60fvKLmdxVlyXHLbn1o/eVMXaEIUaCweBWVg8Cg5TTOxI7pPektef2hOfTI7wTKJ+JHdY96UVrs10x+27wWc6a3KLV4VbbBhoUhb3ZeFX244YFtls1j8N7FMXF+pT2vlw06qVr5tTqg1nnOVbclwwy59aP3lA87k8VfclpzFcutH3OQxdoQhRoLB4FZQg4u1+JX9YpXO7eqpj9s+CcXoczfK+It3CKh5DcY0LiRp6MJRT0zJJ6h9RWyMDpTuNYxugwPOQc65U4Nu3AmQKwoQREOhTtHSUDME3KrB9Qi/InEb6NrMfG9dj1cz/wA1biR5ubyAVK1jiXFUVWLc/O9ca9/S+MdzEjq4rYOFRVu6ZR4BLhCsly6JySkmG55/rj7nLnkraEHHOz/jFdF5JjD8CuDYMlrZWZJOSdD5zqUovkIQihCEINO4WyiuUXN11LFM0cN5ureg8R2KZquTey1FRHK2auhY3OYo5gQ/J85cCfYVZIQSkfJ/YWfUqXdM7l9xsPYQP4aU9NQ//apEIJwbEbP58qhcemeT8yz8iNm8/wAqjPWkefFUSECD5F7N7pb8TUuCMatymNqtNBaIDBbaSKnjJyQwcT6zxK3kIBCEIP/Z",
        specs:
          "16 place settings, 3rd rack, 44 dBA noise level, AutoAir dry technology",
        price: 1099,
      },
      {
        model: "Haier 4-Door French Door Refrigerator",
        image:
          "https://www.haier.com/us/products/refrigerators/french-door/hrf15n3ags/",
        specs:
          "15.5 cu. ft. capacity, Dual Icemaker, Fingerprint Resistant Stainless Steel, Energy Star certified",
        price: 1499,
      },
    ],
    "Audio & Video": [
      {
        model: "Sony X950H 4K HDR LED TV",
        image:
          "data:image/jpeg;base64,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",
        specs:
          '65" 4K HDR LED display, X1 Ultimate processor, Dolby Vision, Acoustic Multi-Audio',
        price: 1498,
      },
      {
        model: "Samsung The Frame QLED TV",
        image:
          "https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/",
        specs:
          '55" QLED 4K display, Art Mode, Motion Sensor, Quantum Processor 4K',
        price: 1499,
      },
      {
        model: "Bose Noise Cancelling Headphones 700",
        image:
          "https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html",
        specs:
          "Adaptive noise cancellation, Bluetooth 5.0, Up to 20 hours of battery life, Touch controls",
        price: 379,
      },
      {
        model: "LG CX OLED TV",
        image: "https://www.lg.com/us/tvs/lg-oled65cxpua-oled-4k-tv",
        specs:
          '65" OLED 4K display, α9 Gen 3 AI Processor 4K, Dolby Vision IQ, Dolby Atmos',
        price: 1799,
      },
      {
        model: "Panasonic SL-G700 Wireless Speaker",
        image:
          "https://na.panasonic.com/us/audio-video-solutions/wireless-speakers/sl-g700-premium-wireless-speaker",
        specs:
          "High-Resolution Audio, Chromecast built-in, Bluetooth 5.0, 40W output power",
        price: 699,
      },
    ],
    "Cameras & Photography": [
      {
        model: "Canon EOS R6 Mirrorless Camera",
        image:
          "https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-interchangeable-lens-cameras/eos-r/eos-r6",
        specs:
          "20MP Full-Frame CMOS Sensor, DIGIC X Image Processor, 4K 60p Video, Dual Pixel CMOS AF II",
        price: 2499,
      },
      {
        model: "Nikon D850 DSLR Camera",
        image:
          "https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d850.html",
        specs:
          "45.7MP Full-Frame CMOS Sensor, EXPEED 5 Image Processor, 4K UHD Video, 153-Point AF System",
        price: 2799,
      },
      {
        model: "Sony a7 III Mirrorless Camera",
        image:
          "https://electronics.sony.com/imaging/interchangeable-lens-cameras/full-frame/p/ilce7m3-b",
        specs:
          "24.2MP Full-Frame Exmor R CMOS Sensor, BIONZ X Image Processor, 4K HDR Video, 693-Point AF System",
        price: 1998,
      },
      {
        model: "Fujifilm X-T4 Mirrorless Camera",
        image: "https://fujifilm-x.com/en-us/products/cameras/x-t4/",
        specs:
          "26.1MP X-Trans CMOS 4 Sensor, X-Processor 4 Image Processor, 4K 60p Video, 5-Axis In-Body Image Stabilization",
        price: 1699,
      },
      {
        model: "Panasonic LUMIX S5 Mirrorless Camera",
        image:
          "https://av.jpn.support.panasonic.com/support/global/cs/dsc/products/s5/index.html",
        specs:
          "24.2MP Full-Frame CMOS Sensor, Venus Engine Image Processor, 4K 60p Video, Dual Native ISO Technology",
        price: 1999,
      },
    ],
  },
  clothing: {
    "Men's Apparel": [
      {
        model: "Nike Air Force 1 '07",
        image: "https://www.nike.com/t/air-force-1-07-mens-shoe-Xd3Xvb",
        specs: "Leather upper, Rubber sole, Iconic low-top silhouette",
        price: 90,
      },
      {
        model: "Adidas Ultraboost 21",
        image: "https://www.adidas.com/us/ultraboost-21-shoes/FY0379.html",
        specs:
          "Primeblue upper made with Parley Ocean Plastic, Boost midsole, Continental rubber outsole",
        price: 180,
      },
      {
        model: "Under Armour HOVR Phantom 2",
        image:
          "https://www.underarmour.com/en-us/p/footwear/mens-ua-hovr-phantom-2-running-shoes/3023025.html",
        specs:
          "HOVR technology for responsive cushioning, Breathable mesh upper, Durable rubber outsole",
        price: 130,
      },
      {
        model: "Levi's 501 Original Fit Jeans",
        image:
          "https://www.levi.com/US/en_US/apparel/clothing/bottoms/original-fit-jeans/p/005010000",
        specs: "100% cotton denim, Button fly, Classic 5-pocket design",
        price: 59.5,
      },
      {
        model: "H&M Slim Fit Chino Pants",
        image: "https://www2.hm.com/en_us/productpage.0949847001.html",
        specs: "98% cotton, 2% elastane, Slim fit, Belt loops",
        price: 24.99,
      },
    ],
    "Women's Apparel": [
      {
        model: "Zara Floral Print Midi Dress",
        image:
          "https://www.zara.com/us/en/floral-print-midi-dress-p07591412.html",
        specs: "100% polyester, Floral print, Midi length",
        price: 49.9,
      },
      {
        model: "Forever 21 Cropped Hoodie",
        image: "https://www.forever21.com/us/2000416688.html",
        specs: "60% cotton, 40% polyester, Cropped silhouette, Drawstring hood",
        price: 19.99,
      },
      {
        model: "H&M Straight-Fit Jeans",
        image: "https://www2.hm.com/en_us/productpage.0947326001.html",
        specs: "99% cotton, 1% elastane, Straight fit, Five-pocket design",
        price: 34.99,
      },
      {
        model: "ASOS Design Pleated Midi Skirt",
        image:
          "https://www.asos.com/us/asos-design/asos-design-pleated-midi-skirt-in-satin/prd/13688744",
        specs: "100% polyester, Pleated design, Midi length",
        price: 40,
      },
      {
        model: "Topshop Satin Slip Dress",
        image:
          "https://www.topshop.com/en/tsuk/product/clothing-427/dresses-442/satin-slip-dress-9604255",
        specs: "100% polyester, Slip dress silhouette, Satin finish",
        price: 55,
      },
    ],
    "Kids' Clothing": [
      {
        model: "Gap Kids Logo Hoodie",
        image:
          "https://www.gap.com/browse/product.do?pid=677524002&cid=1157236&pcid=1157236&vid=1&nav=hamnav%3Akids%3Aboys-clothing%3Asweatshirts-and-hoodies",
        specs: "60% cotton, 40% polyester, Pullover hoodie, Gap logo graphic",
        price: 34.95,
      },
      {
        model: "Old Navy Graphic Tee",
        image:
          "https://oldnavy.gap.com/browse/product.do?pid=743524002&cid=1157236&pcid=1157236&vid=1&nav=hamnav%3Akids%3Aboys-clothing%3Atops",
        specs: "100% cotton, Graphic print, Crew neck",
        price: 9.99,
      },
      {
        model: "Carters Footed Pajamas",
        image:
          "https://www.carters.com/carters-baby-boy-sleepwear/V_115G105.html",
        specs: "100% cotton, Footed design, Snap-front closure",
        price: 16.0,
      },
      {
        model: "Gymboree Floral Dress",
        image:
          "https://www.gymboree.com/en/product/floral-print-dress/G0000.html",
        specs: "100% cotton, Floral print, Sleeveless design",
        price: 29.95,
      },
      {
        model: "H&M Kids Denim Jacket",
        image: "https://www2.hm.com/en_us/productpage.0947326001.html",
        specs: "100% cotton, Denim construction, Button-front closure",
        price: 24.99,
      },
    ],
    Activewear: [
      {
        model: "Nike Dri-FIT Training Shorts",
        image: "https://www.nike.com/t/dri-fit-mens-9-training-shorts-Xd3Xvb",
        specs: "100% polyester, Dri-FIT technology, Elastic waistband",
        price: 35,
      },
      {
        model: "Adidas Ultraboost 21 Running Shoes",
        image: "https://www.adidas.com/us/ultraboost-21-shoes/FY0379.html",
        specs:
          "Primeblue upper made with Parley Ocean Plastic, Boost midsole, Continental rubber outsole",
        price: 180,
      },
      {
        model: "Under Armour HOVR Phantom 2 Running Shoes",
        image:
          "https://www.underarmour.com/en-us/p/footwear/mens-ua-hovr-phantom-2-running-shoes/3023025.html",
        specs:
          "HOVR technology for responsive cushioning, Breathable mesh upper, Durable rubber outsole",
        price: 130,
      },
      {
        model: 'Lululemon Align Pant II 25"',
        image:
          "https://shop.lululemon.com/p/women-pants/Align-Pant-II/_/prod8780551?color=26914",
        specs: 'Nulu fabric, High-rise waist, 25" inseam',
        price: 98,
      },
      {
        model: "Puma Evostripe Pants",
        image: "https://us.puma.com/en/us/pd/evostripe-mens-pants/595362.html",
        specs: "100% cotton, Drawstring waist, Relaxed fit",
        price: 50,
      },
    ],
    Accessories: [
      {
        model: "Michael Kors Jet Set Travel Tote",
        image:
          "https://www.michaelkors.com/jet-set-travel-large-top-zip-tote/_/R-US_30T8GTVT3L",
        specs: "Saffiano leather, Zip-top closure, Adjustable handles",
        price: 228,
      },
      {
        model: "Kate Spade Margaux Medium Satchel",
        image:
          "https://www.katespade.com/products/margaux-medium-satchel/PXRU9425.html",
        specs: "Pebbled leather, Zip-top closure, Adjustable strap",
        price: 328,
      },
      {
        model: "Coach Signature Canvas Tote",
        image:
          "https://www.coach.com/coach-gallery-signature-canvas-tote/79608.html",
        specs: "Signature canvas, Zip-top closure, Leather trim",
        price: 350,
      },
      {
        model: "Fossil Emerson Leather Crossbody",
        image:
          "https://www.fossil.com/en-us/products/emerson-leather-crossbody/ZB1356001.html",
        specs: "Leather construction, Adjustable strap, Zip-top closure",
        price: 98,
      },
      {
        model: "Gucci GG Marmont Matelassé Shoulder Bag",
        image:
          "https://www.gucci.com/us/en/pr/women/handbags/shoulder-bags/gg-marmont-matelasse-shoulder-bag-p-447632DTD1T1000",
        specs: "GG Supreme canvas, Matelassé chevron pattern, Leather trim",
        price: 1980,
      },
    ],
  },
  furniture: {
    "Living Room Furniture": [
      {
        model: "IKEA Ektorp Sofa",
        image: "furniture.png",
        specs:
          "Removable, washable cover, Seat cushions filled with high-resilience foam, Solid wood frame",
        price: 599,
      },
      {
        model: "Ashley Furniture Alenya Sectional",
        image: "furniture.png",
        specs:
          "Polyester upholstery, Reversible chaise, Includes left-arm facing loveseat, armless chair, and right-arm facing corner chair",
        price: 1099,
      },
      {
        model: "West Elm Paidge Sofa",
        image: "furniture.png",
        specs: "Solid wood frame, Polyester upholstery, Loose back cushions",
        price: 1499,
      },
      {
        model: "Crate & Barrel Lounge II Sofa",
        image: "furniture.png",
        specs:
          "Hardwood frame, Polyester-blend upholstery, Loose seat and back cushions",
        price: 1795,
      },
      {
        model: "Wayfair Serta RTA Palisades Collection Sofa",
        image: "furniture.png",
        specs: "Polyester upholstery, Tufted back, Includes 2 throw pillows",
        price: 449,
      },
    ],
    "Bedroom Furniture": [
      {
        model: "IKEA Malm Bed Frame",
        image: "furniture.png",
        specs:
          "Solid wood and wood veneer construction, Slatted bed base, Available in different sizes",
        price: 399,
      },
      {
        model: 'Bed Bath & Beyond Nora 12" Memory Foam Mattress',
        image: "furniture.png",
        specs:
          "12-inch memory foam construction, CertiPUR-US certified, 10-year warranty",
        price: 599,
      },
      {
        model: "Casper Original Mattress",
        image: "furniture.png",
        specs: "Proprietary foam layers, Breathable design, 100-night trial",
        price: 995,
      },
      {
        model: "Pottery Barn Ava Upholstered Bed",
        image: "furniture.png",
        specs:
          "Solid wood and wood veneer construction, Polyester upholstery, Available in different sizes",
        price: 1499,
      },
      {
        model: "Rooms To Go Brinley 5-Piece Bedroom Set",
        image: "furniture.png",
        specs:
          "Includes queen bed, dresser, mirror, chest, and nightstand, Solid wood and wood veneer construction",
        price: 1199,
      },
    ],
    "Dining Room Furniture": [
      {
        model: "IKEA Ekedalen Extendable Table",
        image: "furniture.png",
        specs:
          "Solid wood and wood veneer construction, Extends from 74 to 114 cm, Seats 4-6 people",
        price: 399,
      },
      {
        model: "Raymour & Flanigan Braden 7-Piece Dining Set",
        image: "furniture.png",
        specs:
          "Includes table and 6 chairs, Solid wood construction, Seats 6-8 people",
        price: 999,
      },
      {
        model: "Pier 1 Imports Cora Dining Table",
        image: "furniture.png",
        specs:
          "Solid mango wood construction, Seats 4-6 people, Distressed finish",
        price: 599,
      },
      {
        model: "Crate & Barrel Basque Solid Oak Dining Table",
        image: "furniture.png",
        specs:
          "Solid oak construction, Seats 6-8 people, Includes 2 extension leaves",
        price: 1999,
      },
      {
        model: "Ethan Allen Brantley Dining Table",
        image: "furniture.png",
        specs:
          "Solid wood construction, Seats 6-8 people, Includes 2 extension leaves",
        price: 1799,
      },
    ],
    "Office Furniture": [
      {
        model: "IKEA Bekant Desk",
        image: "furniture.png",
        specs:
          "Linoleum and steel construction, Adjustable height, Includes cable management",
        price: 379,
      },
      {
        model: "Staples Hyken Technical Mesh Task Chair",
        image: "furniture.png",
        specs:
          "Breathable mesh back, Adjustable lumbar support, Swivel and caster base",
        price: 199,
      },
      {
        model: "Office Depot Realspace Magellan Collection Desk",
        image: "furniture.png",
        specs:
          "L-shaped design, Laminate and steel construction, Includes file drawer and keyboard tray",
        price: 299,
      },
      {
        model: "Wayfair Sauder Beginnings Computer Desk",
        image: "furniture.png",
        specs:
          "Engineered wood construction, Includes keyboard tray and CPU stand, Compact design",
        price: 99,
      },
      {
        model: "Amazon Basics Classic Mesh Office Chair",
        image: "furniture.png",
        specs:
          "Breathable mesh back, Adjustable seat height, Swivel and caster base",
        price: 59,
      },
    ],
    "Outdoor Furniture": [
      {
        model: "Home Depot Hampton Bay Statesville 7-Piece Patio Set",
        image: "furniture.png",
        specs:
          "Includes 6 chairs and 1 table, Steel frame, Olefin fabric cushions",
        price: 599,
      },
      {
        model: "Lowes Allen + Roth Pardini 4-Piece Patio Conversation Set",
        image: "furniture.png",
        specs:
          "Includes 2 chairs, 1 loveseat, and 1 coffee table, Aluminum frame, Olefin fabric cushions",
        price: 799,
      },
      {
        model: "Target Threshold Halsted 4-Piece Patio Conversation Set",
        image: "furniture.png",
        specs:
          "Includes 2 chairs, 1 loveseat, and 1 coffee table, Steel frame, Olefin fabric cushions",
        price: 499,
      },
      {
        model: "Walmart Mainstays Wicker Patio Furniture Set",
        image: "furniture.png",
        specs:
          "Includes 2 chairs, 1 loveseat, and 1 coffee table, Wicker construction, Olefin fabric cushions",
        price: 349,
      },
      {
        model: "Costco Kirkland Signature 6-Piece Patio Set",
        image: "furniture.png",
        specs:
          "Includes 4 chairs, 1 loveseat, and 1 coffee table, Aluminum frame, Olefin fabric cushions",
        price: 899,
      },
    ],
  },
  health_beauty: {
    Skincare: [
      {
        model: "Neutrogena Hydro Boost Water Gel",
        image:
          "https://www.neutrogena.com/products/skincare/hydro-boost-water-gel/6811049.html",
        specs: "Oil-free, Hyaluronic acid formula, Fragrance-free",
        price: 19.99,
      },
      {
        model: "Cetaphil Daily Facial Cleanser",
        image: "https://www.cetaphil.com/us/product/daily-facial-cleanser",
        specs: "Gentle, Non-irritating, Suitable for all skin types",
        price: 9.99,
      },
      {
        model: "Olay Regenerist Micro-Sculpting Cream",
        image: "https://www.olay.com/regenerist-micro-sculpting-cream",
        specs:
          "Fragrance-free, Contains amino-peptide complex, Hydrates and firms skin",
        price: 28.99,
      },
      {
        model: "Clinique Dramatically Different Moisturizing Lotion+",
        image:
          "https://www.clinique.com/product/1687/5046/skin-care/moisturizers/dramatically-different-moisturizing-lotion",
        specs: "Oil-free, Allergy tested, Fragrance-free",
        price: 39,
      },
      {
        model: "The Ordinary Niacinamide 10% + Zinc 1%",
        image:
          "https://theordinary.deciem.com/product/rdn-niacinamide-10pct-zinc-1pct-30ml",
        specs:
          "Helps reduce the appearance of blemishes and congestion, Fragrance-free, Cruelty-free",
        price: 5.9,
      },
    ],
    Haircare: [
      {
        model: "Pantene Pro-V Shampoo and Conditioner",
        image:
          "https://www.pantene.com/en-us/product-and-tools/shampoo-and-conditioner/pro-v-daily-moisture-renewal-shampoo-and-conditioner",
        specs:
          "Sulfate-free, Strengthens and nourishes hair, Helps reduce breakage",
        price: 4.99,
      },
      {
        model: "Head & Shoulders Classic Clean Shampoo",
        image:
          "https://www.headandshoulders.com/en-us/shop-products/classic-clean-shampoo",
        specs:
          "Helps treat and prevent dandruff, Cleanses and refreshes scalp, Leaves hair soft and manageable",
        price: 5.99,
      },
      {
        model: "L'Oreal Paris Elvive Total Repair Shampoo",
        image:
          "https://www.lorealparisusa.com/products/hair-care/product-lines/elvive/total-repair-shampoo.aspx",
        specs:
          "Helps repair damaged, fragile hair, Strengthens and protects hair, Sulfate-free",
        price: 4.99,
      },
      {
        model: "Tresemme Keratin Smooth Shampoo",
        image:
          "https://www.tresemme.com/us/en/products/shampoo/keratin-smooth-shampoo.html",
        specs:
          "Helps smooth and control frizz, Contains keratin and marula oil, Leaves hair soft and manageable",
        price: 4.99,
      },
      {
        model: "Garnier Fructis Sleek & Shine Shampoo",
        image:
          "https://www.garnierusa.com/about-our-brands/fructis/sleek-and-shine/sleek-and-shine-shampoo",
        specs:
          "Helps smooth and control frizz, Contains fruit extracts, Leaves hair shiny and manageable",
        price: 3.99,
      },
    ],
    Makeup: [
      {
        model: "Maybelline Fit Me Matte + Poreless Foundation",
        image:
          "https://www.maybelline.com/face-makeup/foundation/fit-me-matte-poreless-foundation",
        specs: "Lightweight, Buildable coverage, Helps control shine",
        price: 7.99,
      },
      {
        model: "L'Oreal Paris Voluminous Lash Paradise Mascara",
        image:
          "https://www.lorealparisusa.com/products/makeup/eye/mascara/voluminous-lash-paradise-mascara.aspx",
        specs: "Volumizing formula, Soft, flexible brush, Smudge-proof",
        price: 9.99,
      },
      {
        model: "Revlon ColorStay Liquid Eye Pencil",
        image:
          "https://www.revlon.com/eyes/eyeliner/colorstay-liquid-eye-pencil",
        specs: "Long-lasting, Creamy formula, Precise application",
        price: 7.99,
      },
      {
        model: "NYX Professional Makeup Butter Gloss",
        image:
          "https://www.nyxcosmetics.com/lip-makeup/lip-gloss/butter-gloss/NYX_001.html",
        specs: "Hydrating formula, Sheer, glossy finish, Wide range of shades",
        price: 4.99,
      },
      {
        model: "Covergirl Trublend Matte Made Foundation",
        image:
          "https://www.covergirl.com/en_us/makeup/face/foundation/trublend-matte-made-liquid-foundation.html",
        specs: "Matte finish, Medium to full coverage, Buildable formula",
        price: 8.99,
      },
    ],
    "Personal Care": [
      {
        model: "Colgate Total Toothpaste",
        image:
          "https://www.colgate.com/en-us/products/toothpaste/colgate-total",
        specs:
          "Helps prevent cavities, plaque, and gingivitis, Fluoride formula, Freshens breath",
        price: 3.99,
      },
      {
        model: "Crest 3D White Toothpaste",
        image:
          "https://www.crest.com/en-us/products/toothpaste/crest-3d-white-toothpaste",
        specs: "Whitens teeth, Removes surface stains, Freshens breath",
        price: 4.99,
      },
      {
        model: "Dove Beauty Bar",
        image:
          "https://www.dove.com/us/en/washing-and-bathing/bar-soap/beauty-bar.html",
        specs:
          "Gentle cleansing, Moisturizing formula, Leaves skin soft and smooth",
        price: 3.99,
      },
      {
        model: "Gillette Mach3 Razor",
        image: "https://gillette.com/en-us/products/razors-blades/mach3-razor",
        specs: "3-blade technology, Pivoting head, Lubricating strip",
        price: 9.99,
      },
      {
        model: "Schick Hydro 5 Razor",
        image:
          "https://www.schick.com/en-us/razors-and-blades/mens-razors/hydro-5",
        specs: "5-blade cartridge, Hydrating gel reservoir, Pivoting head",
        price: 11.99,
      },
    ],
    Fragrances: [
      {
        model: "Calvin Klein Eternity Eau de Parfum",
        image:
          "https://www.calvinklein.com/eternity-eau-de-parfum-3605971401524.html",
        specs:
          "Floral, woody, and citrus notes, Long-lasting fragrance, Suitable for women",
        price: 78,
      },
      {
        model: "Chanel Coco Mademoiselle Eau de Parfum",
        image:
          "https://www.chanel.com/us/fragrance/p/103600/coco-mademoiselle-eau-de-parfum-spray/",
        specs:
          "Floral, fruity, and woody notes, Iconic Chanel fragrance, Suitable for women",
        price: 105,
      },
      {
        model: "Dior Sauvage Eau de Toilette",
        image:
          "https://www.dior.com/en_us/products/beauty-Y0996400-sauvage-eau-de-toilette-spray",
        specs:
          "Aromatic, woody, and spicy notes, Long-lasting fragrance, Suitable for men",
        price: 68,
      },
      {
        model: "Gucci Guilty Eau de Toilette",
        image:
          "https://www.gucci.com/us/en/pr/beauty-and-wellness/fragrance/womens-fragrance/eau-de-toilette/guilty-eau-de-toilette-p-3614227000001.html",
        specs:
          "Floral, fruity, and woody notes, Vibrant and bold fragrance, Suitable for women",
        price: 84,
      },
      {
        model: "Versace Eros Eau de Toilette",
        image:
          "https://www.versace.com/us/en-us/eros-eau-de-toilette-spray-100ml-1003/1003723-DTU2000_DTU2000.html",
        specs:
          "Aromatic, woody, and mint notes, Long-lasting fragrance, Suitable for men",
        price: 92,
      },
    ],
  },
};

// Populate category navigation and item grid
for (const category in categoriesData) {
  const categoryItem = document.createElement("li");
  categoryItem.classList.add("dropdown");
  const categoryName = document.createElement("a");
  categoryName.textContent = category;
  categoryItem.appendChild(categoryName);
  const dropdownContent = document.createElement("ul");
  dropdownContent.classList.add("dropdown-content");
  for (const subcategory in categoriesData[category]) {
    const subcategoryItem = document.createElement("li");
    subcategoryItem.textContent = subcategory;
    subcategoryItem.addEventListener("click", () => {
      itemGrid.innerHTML = ""; // Clear previous items
      categoriesData[category][subcategory].forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");
        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.model;
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.model;
        const itemSpecs = document.createElement("p");
        itemSpecs.textContent = item.specs;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `ETB ${item.price}`;
        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.addEventListener("click", () => {
          // Add functionality for buy button
          alert(`You bought ${item.model} for $${item.price}`);
        });
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemSpecs);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(buyButton);
        itemGrid.appendChild(itemContainer);
      });
    });
    dropdownContent.appendChild(subcategoryItem);
  }
  categoryItem.appendChild(dropdownContent);
  categoryNav.appendChild(categoryItem);
}
