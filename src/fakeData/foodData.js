const foods = [
    {
        'id':1,
        'img':'https://i.ibb.co/WPfspsm/breakfast1.png',
        'price':10.43,
        'catagories':'Breakfast',
        'title':'Bagel and cream cheese',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':2,
        'img':'https://i.ibb.co/H7zrJTn/breakfast2.png',
        'price':9,
        'catagories':'Breakfast',
        'title':'Breakfast sandwich',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':3,
        'img':'https://i.ibb.co/zr7rWfT/breakfast3.png',
        'price':8.3,
        'catagories':'Breakfast',
        'title':'Baked Chikeen',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':4,
        'img':'https://i.ibb.co/VCDcft7/breakfast4.png',
        'price':10,
        'catagories':'Breakfast',
        'title':'Eggs Benedict',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':5,
        'img':'https://i.ibb.co/KmdJhmR/breakfast5.png',
        'price':11,
        'catagories':'Breakfast',
        'title':'Toast Croissant Fried egg',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':6,
        'img':'https://i.ibb.co/c2HrYSJ/breakfast6.png',
        'price':7.98,
        'catagories':'Breakfast',
        'title':'Full Breakfast Fried Egg Toast Brunch',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':7,
        'img':'https://i.ibb.co/ysW4S5W/lunch1.png',
        'price':10.43,
        'catagories':'Lunch',
        'title':'Bagel and cream cheese',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':8,
        'img':'https://i.ibb.co/3SxTDPZ/lunch2.png',
        'price':9,
        'catagories':'Lunch',
        'title':'Lunch sandwich',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':9,
        'img':'https://i.ibb.co/mv0mtwy/lunch3.png',
        'price':8.3,
        'catagories':'Lunch',
        'title':'Baked Chikeen',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':10,
        'img':'https://i.ibb.co/YQhmKsS/lunch4.png',
        'price':20.54,
        'catagories':'Lunch',
        'title':'Eggs Benedict',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':11,
        'img':'https://i.ibb.co/dLTGykj/lunch5.png',
        'price':16.76,
        'catagories':'Lunch',
        'title':'Toast Croissant Fried egg',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':12,
        'img':'https://i.ibb.co/CnCX9Tm/lunch6.png',
        'price':7.98,
        'catagories':'Lunch',
        'title':'Full Lunch Fried Egg Toast Brunch',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':13,
        'img':'https://i.ibb.co/1qWFHdw/dinner1.png',
        'price':10.43,
        'catagories':'Dinner',
        'title':'Bagel and cream cheese',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':14,
        'img':'https://i.ibb.co/vQxRBJ1/dinner2.png',
        'price':9,
        'catagories':'Dinner',
        'title':'Dinner sandwich',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':15,
        'img':'https://i.ibb.co/q0MSdpc/dinner3.png',
        'price':8.3,
        'catagories':'Dinner',
        'title':'Baked Chikeen',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':16,
        'img':'https://i.ibb.co/ThcyT8F/dinner4.png',
        'price':10,
        'catagories':'Dinner',
        'title':'Eggs Benedict',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':17,
        'img':'https://i.ibb.co/C9Qpgvd/dinner5.png',
        'price':11,
        'catagories':'Dinner',
        'title':'Toast Croissant Fried egg',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    },
    {
        'id':18,
        'img':'https://i.ibb.co/QD8ysKq/dinner6.png',
        'price':7.98,
        'catagories':'Dinner',
        'title':'Full Dinner Fried Egg Toast Brunch',
        'subtitle':'How we dream about our future',
        'detailes':'Gay one the what walk she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration.'
    }
    
]

export default foods;