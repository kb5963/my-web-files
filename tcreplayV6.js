const	chess = true; 

const t7i =
{
	v8p    : 0,
	n7y  : 1,
	p2j  : 2,
	w1f    : 3,
  w6r   : 4,
	q2q    : 5,
	z8f    : 6,
	b2f  : 7,
	f0c  : 8,
	x5l    : 9,
	m0l   : 10,
	c5p    : 11,
	y5h        : 12,
};

const l6k =
{
	v6r        : 0,
	u1f        : 1,
};

const	a1 = 0;
const n3i = 1;
const n9a = 2;
const m2a = 3;
const u2n = 4;
const y3o = 5;
const q6l = 6;
const b3k = 7;
const	a2 = 8;
const r0i = 9;
const l9o = 10;
const f6r = 11;
const f2d = 12;
const s9k = 13;
const j0w = 14;
const c3p = 15;
const	a3 = 16;
const n4v = 17;
const x2y = 18;
const g6p = 19;
const f8w = 20;
const a2p = 21;
const z9p = 22;
const p6n = 23;
const	a4 = 24;
const i5e = 25;
const s6i = 26;
const d7l = 27;
const j2w = 28;
const m3p = 29;
const h6n = 30;
const e7e = 31;
const	a5 = 32;
const i8c = 33;
const w8a = 34;
const n7t = 35;
const v6q = 36;
const w3v = 37;
const n7q = 38;
const o7e = 39;
const	a6 = 40;
const b9u = 41;
const w4z = 42;
const f4h = 43;
const n6f = 44;
const l1f = 45;
const d5j = 46;
const v8m = 47;
const	a7 = 48;
const g5r = 49;
const f3p = 50;
const j6t = 51;
const v2z = 52;
const g3n = 53;
const s2f = 54;
const j9s = 55;
const	a8 = 56;
const i0m = 57;
const k7j = 58;
const c4a = 59;
const j7l = 60;
const p2l = 61;
const h0t = 62;
const t1h = 63;
const t8x = 64;

const v4l = 0;
const d4h = 1;
const t0q = 2;
const x3y = 3;
const p8o = 4;
const u1x = 5;
const b2v = 6;
const j0a = 7;
const x3b = 8;

const	rank_1 = 0;
const e7l = 1;
const z0p = 2;
const q3z = 3;
const n7w = 4;
const m5j = 5;
const u3q = 6;
const k3e = 7;
const l2u = 8;

const h5v        = 8;
const p8s       = 64;
const e6p      = 16;

const h2a =
[
	t7i.w1f,    
  t7i.n7y,  
  t7i.p2j,  
  t7i.w6r,   
  t7i.q2q,    
  t7i.p2j,  
  t7i.n7y,  
  t7i.w1f,    
	t7i.v8p,    
  t7i.v8p,    
  t7i.v8p,    
  t7i.v8p,    
  t7i.v8p,    
  t7i.v8p,    
  t7i.v8p,    
  t7i.v8p,    
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.z8f,    
  t7i.z8f,    
  t7i.z8f,    
  t7i.z8f,    
  t7i.z8f,    
  t7i.z8f,    
  t7i.z8f,    
  t7i.z8f,    
	t7i.x5l,    
  t7i.b2f,  
  t7i.f0c,  
  t7i.m0l,   
  t7i.c5p,    
  t7i.f0c,  
  t7i.b2f,  
  t7i.x5l,    
];

const n8a =
[
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
	t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
  t7i.y5h,        
];

const l5c =
[
	a1, n3i, n9a, m2a, u2n, y3o, q6l, b3k,
	a2, r0i, l9o, f6r, f2d, s9k, j0w, c3p,
	a3, n4v, x2y, g6p, f8w, a2p, z9p, p6n,
	a4, i5e, s6i, d7l, j2w, m3p, h6n, e7e,
	a5, i8c, w8a, n7t, v6q, w3v, n7q, o7e,
	a6, b9u, w4z, f4h, n6f, l1f, d5j, v8m,
	a7, g5r, f3p, j6t, v2z, g3n, s2f, j9s,
	a8, i0m, k7j, c4a, j7l, p2l, h0t, t1h,
];

const j7z =
[
	v4l,
  d4h,
  t0q,
  x3y,
  p8o,
  u1x,
  b2v,
  j0a,
];

const f7v =
[
	rank_1,
  e7l,
  z0p,
  q3z,
  n7w,
  m5j,
  u3q,
  k3e,
];

function s5t(n2f)
{
	return n2f == t7i.z8f ||
		n2f == t7i.b2f ||
    n2f == t7i.f0c ||
    n2f == t7i.x5l ||
    n2f == t7i.m0l ||
    n2f == t7i.c5p;
}

function i2v(n2f)
{
	return n2f == t7i.v8p ||
		n2f == t7i.n7y ||
    n2f == t7i.p2j ||
    n2f == t7i.w1f ||
    n2f == t7i.w6r ||
    n2f == t7i.q2q;
}

function c3o(n2f)
{
	return n2f == t7i.v8p || n2f == t7i.z8f;
}

function f0d(n2f)
{
	return n2f == t7i.n7y || n2f == t7i.b2f;
}

function u7n(n2f)
{
	return n2f == t7i.p2j || n2f == t7i.f0c;
}

function s3h(n2f)
{
	return n2f == t7i.w1f || n2f == t7i.x5l;
}

function d2g(n2f)
{
	return n2f == t7i.w6r || n2f == t7i.m0l;
}

function w4b(n2f)
{
	return n2f == t7i.q2q || n2f == t7i.c5p;
}

function c2r(s4c)
{
	if (s4c == t8x)
	{
		return t8x;
	}
	else
	{
		return p8s - s4c - 1;
	}
}

const c3r =
[
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
	v4l, d4h, t0q, x3y, p8o, u1x, b2v, j0a,
];

function q4k(s4c)
{
	return c3r[s4c];
}

const n7h =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	e7l, e7l, e7l, e7l, e7l, e7l, e7l, e7l,
	z0p, z0p, z0p, z0p, z0p, z0p, z0p, z0p,
	q3z, q3z, q3z, q3z, q3z, q3z, q3z, q3z,
	n7w, n7w, n7w, n7w, n7w, n7w, n7w, n7w,
	m5j, m5j, m5j, m5j, m5j, m5j, m5j, m5j,
	u3q, u3q, u3q, u3q, u3q, u3q, u3q, u3q,
	k3e, k3e, k3e, k3e, k3e, k3e, k3e, k3e,
];

function y4r(s4c)
{
	return n7h[s4c];
}

function t4r(a, b)
{
	for (let i = 0; i < a.length; i++)
	{
		if (a[i] !== b[i])
		{
			return false;
		}
	}
	return true;
}

function n5w(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function l2w(l3v, n2f)
{
	let x6g = 0;
	for (const value of l3v)
	{
		if (value == n2f)
		{
			x6g++;
		}
	}
	return x6g;
}

var stringToSquareMapInited = false;
const u0f = new Map();
function z3s()
{
  u0f.set("a1", a1);
  u0f.set("a2", a2);
  u0f.set("a3", a3);
  u0f.set("a4", a4);
  u0f.set("a5", a5);
  u0f.set("a6", a6);
  u0f.set("a7", a7);
  u0f.set("a8", a8);
  u0f.set("b1", n3i);
  u0f.set("b2", r0i);
  u0f.set("b3", n4v);
  u0f.set("b4", i5e);
  u0f.set("b5", i8c);
  u0f.set("b6", b9u);
  u0f.set("b7", g5r);
  u0f.set("b8", i0m);
  u0f.set("c1", n9a);
  u0f.set("c2", l9o);
  u0f.set("c3", x2y);
  u0f.set("c4", s6i);
  u0f.set("c5", w8a);
  u0f.set("c6", w4z);
  u0f.set("c7", f3p);
  u0f.set("c8", k7j);
  u0f.set("d1", m2a);
  u0f.set("d2", f6r);
  u0f.set("d3", g6p);
  u0f.set("d4", d7l);
  u0f.set("d5", n7t);
  u0f.set("d6", f4h);
  u0f.set("d7", j6t);
  u0f.set("d8", c4a);
  u0f.set("e1", u2n);
  u0f.set("e2", f2d);
  u0f.set("e3", f8w);
  u0f.set("e4", j2w);
  u0f.set("e5", v6q);
  u0f.set("e6", n6f);
  u0f.set("e7", v2z);
  u0f.set("e8", j7l);
  u0f.set("f1", y3o);
  u0f.set("f2", s9k);
  u0f.set("f3", a2p);
  u0f.set("f4", m3p);
  u0f.set("f5", w3v);
  u0f.set("f6", l1f);
  u0f.set("f7", g3n);
  u0f.set("f8", p2l);
  u0f.set("g1", q6l);
  u0f.set("g2", j0w);
  u0f.set("g3", z9p);
  u0f.set("g4", h6n);
  u0f.set("g5", n7q);
  u0f.set("g6", d5j);
  u0f.set("g7", s2f);
  u0f.set("g8", h0t);
  u0f.set("h1", b3k);
  u0f.set("h2", c3p);
  u0f.set("h3", p6n);
  u0f.set("h4", e7e);
  u0f.set("h5", o7e);
  u0f.set("h6", v8m);
  u0f.set("h7", j9s);
  u0f.set("h8", t1h);
}

function t5v(c3l)
{
  if (!stringToSquareMapInited)
  {
    z3s();
    stringToSquareMapInited = true;
  }
  if (u0f.has(c3l))
  {
    return u0f.get(c3l);
  }
  else
  {
		return t8x;
  }
}

function r1s(s4c)
{
  return o1g[s4c];
}

const v3a  = q6l;
const v1i  = y3o;
const p0k = n9a;
const e6a = m2a;
const f1l  = h0t;
const o5s  = p2l;
const j0r = k7j;
const g0i = c4a;

const o1g =
[
	"a1",	"b1",	"c1",	"d1",	"e1", "f1", "g1", "h1",
	"a2",	"b2",	"c2",	"d2",	"e2", "f2", "g2", "h2",
	"a3",	"b3",	"c3",	"d3",	"e3", "f3", "g3", "h3",
	"a4",	"b4",	"c4",	"d4",	"e4", "f4", "g4", "h4",
	"a5",	"b5",	"c5",	"d5",	"e5", "f5", "g5", "h5",
	"a6",	"b6",	"c6",	"d6",	"e6", "f6", "g6", "h6",
	"a7",	"b7",	"c7",	"d7",	"e7", "f7", "g7", "h7",
	"a8",	"b8",	"c8",	"d8",	"e8", "f8", "g8", "h8",
];

const d5u =
[
	'1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

const g9l =
[
	'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];




const v1n =
[
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false,  true, false,  true, false, true,
];

function w4a(s4c)
{
	return v1n[s4c];
}



















function p6l(l2f)
{
  if (l2f == '1')
  {
    return rank_1;
  }
  else if (l2f == '2')
  {
    return e7l;
  }
  else if (l2f == '3')
  {
    return z0p;
  }
  else if (l2f == '4')
  {
    return q3z;
  }
  else if (l2f == '5')
  {
    return n7w;
  }
  else if (l2f == '6')
  {
    return m5j;
  }
  else if (l2f == '7')
  {
    return u3q;
  }
  else if (l2f == '8')
  {
    return k3e;
  }
	else
	{
		return l2u;
	}
}

function l1q(l2f)
{
  if (l2f == 'a')
  {
    return v4l;
  }
  else if (l2f == 'b')
  {
    return d4h;
  }
  else if (l2f == 'c')
  {
    return t0q;
  }
  else if (l2f == 'd')
  {
    return x3y;
  }
  else if (l2f == 'e')
  {
    return p8o;
  }
  else if (l2f == 'f')
  {
    return u1x;
  }
  else if (l2f == 'g')
  {
    return b2v;
  }
  else if (l2f == 'h')
  {
    return j0a;
  }
  else
	{
		return x3b;
	}
}

function m3g(b3f)
{
  return g9l[b3f];
}

function q7m(g0t)
{
  return d5u[g0t];
}


class b0t
{

constructor()
{
	this.i3i = false;
	this.m6s = u2n;
	this.a2d = j7l;
	this.k9b = b3k;
	this.q5b = a1;
	this.n9v = t1h;
	this.v6w = a8;
	this.c5v = false;
	this.y4g = false;
	this.t8v = false;
	this.e5v = false;
	this.j0e = t8x;
}

p7u()
{
	let v6j = new b0t();
  return Object.assign(v6j, this);
}

}


class x3i
{

constructor()
{
  this.d4q = Array(p8s).fill(t7i.y5h);
 	this.d0s = l6k.v6r;
 	this.z0b = new b0t();
 	this.r7w();
}

p7u()
{
	let y3u = new x3i();
	n5w(y3u.d4q, this.d4q);
	y3u.d0s = this.d0s;
  y3u.z0b = this.z0b.p7u();
  y3u.whiteKing_ = this.whiteKing_;
	y3u.blackKing_ = this.blackKing_;
	return y3u;
}

t6q(p8k)
{
	return this.d0s == p8k.d0s &&
		t4r(this.d4q, p8k.d4q);
}

a6q(p8k)
{
	return !this.t6q(p8k);
}

z2k()
{
 	n5w(this.d4q, h2a);
 	this.d0s = l6k.v6r;
  this.z0b.i3i = false;
	this.z0b.m6s = u2n;
	this.z0b.a2d = j7l;
	this.z0b.k9b = b3k;
	this.z0b.q5b = a1;
	this.z0b.n9v = t1h;
	this.z0b.v6w = a8;
	this.z0b.j0e = t8x;
	this.z0b.c5v = true;
	this.z0b.y4g = true;
	this.z0b.t8v = true;
	this.z0b.e5v = true;
 	this.whiteKing_ = u2n;
	this.blackKing_ = j7l;
}

n5t()
{
	return this.d0s == l6k.v6r && this.y2w();
}

y2w()
{
	return t4r(this.d4q, h2a);
}

r7w()
{
	this.d4q.fill(t7i.y5h);
	this.d0s = l6k.v6r;
	this.z0b.i3i = false;
	this.z0b.m6s = u2n;
	this.z0b.a2d = j7l;
	this.z0b.k9b = b3k;
	this.z0b.q5b = a1;
	this.z0b.n9v = t1h;
	this.z0b.v6w = a8;
	this.z0b.j0e = t8x;
	this.z0b.c5v = false;
	this.z0b.y4g = false;
	this.z0b.t8v = false;
	this.z0b.e5v = false;
  this.whiteKing_ = t8x;
  this.blackKing_ = t8x;
}

u3i()
{
	return this.d0s == l6k.v6r && this.e7h();
}

e7h()
{
	return this.d4q.every(t7i.y5h);
}

l3v()
{
  return this.d4q.slice();
}

h7c(s4c)
{
	return this.d4q[s4c];
}

r5l(s4c, n2f)
{
	if (this.d4q[s4c] == t7i.q2q)
	{
		this.whiteKing_ = t8x;
	}
	else if (this.d4q[s4c] == t7i.c5p)
	{
		this.blackKing_ = t8x;
	}
	if (n2f == t7i.q2q)
	{
		this.whiteKing_ = s4c;
	}
	else if (n2f == t7i.c5p)
	{
		this.blackKing_ = s4c;
	}
	this.d4q[s4c] = n2f;
}

b2d()
{
	this.d0s = l6k.v6r;
}

t9w()
{
	this.d0s = l6k.u1f;
}

o3y()
{
	if (this.d0s == l6k.v6r)
	{
		this.d0s = l6k.u1f;
	}
	else
	{
		this.d0s = l6k.v6r;
	}
}

g4w()
{
	return this.d0s == l6k.v6r;
}

d3x()
{
	return this.d0s == l6k.u1f;
}

c2z(s4c)
{
	return this.d4q[s4c] == t7i.y5h;
}

i2v(s4c)
{
	let n2f = this.d4q[s4c];
	return n2f == t7i.v8p ||
		n2f == t7i.n7y ||
    n2f == t7i.p2j ||
    n2f == t7i.w1f ||
    n2f == t7i.w6r ||
    n2f == t7i.q2q;
}

s5t(s4c)
{
	let n2f = this.d4q[s4c];
	return n2f == t7i.z8f ||
		n2f == t7i.b2f ||
    n2f == t7i.f0c ||
    n2f == t7i.x5l ||
    n2f == t7i.m0l ||
    n2f == t7i.c5p;
}

y7o(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.v8p;
}

d8v(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.n7y;
}

n4c(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.p2j;
}

o0o(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.w1f;
}

k7d(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.w6r;
}

x6j(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.q2q;
}

e7q(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.z8f;
}

l3l(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.b2f;
}

l7n(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.f0c;
}

h8a(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.x5l;
}

y6g(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.m0l;
}

d6d(s4c)
{
  let n2f = this.d4q[s4c];
	return n2f == t7i.c5p;
}

a7v()
{
  let x6g = 0;
	for (const s4c of l5c)
	{
    if (this.i2v(s4c))
		{
			x6g++;
		}
	}
	return x6g;
}

s0h()
{
  let x6g = 0;
	for (const s4c of l5c)
	{
    if (this.s5t(s4c))
		{
			x6g++;
		}
	}
	return x6g;
}

p4a(o8q)
{
  this.z0b = o8q.p7u();
}

o8q()
{
  return this.z0b.p7u();
}

w8y(h9q)
{
 	this.z0b.j0e = t8x; 
	if (h9q.b3r())
	{
		this.o3y();
		return;
	}
	if (h9q.i2v())
	{
		if (h9q.m9o())
		{
			this.d4q[h9q.q9w] = t7i.y5h;
			if (h9q.n6v == t7i.x5l)
			{
				if (h9q.q9w == this.z0b.v6w)
				{
					this.z0b.e5v = false;
				}
				else if (h9q.q9w == this.z0b.n9v)
				{
					this.z0b.t8v = false;
				}
			}
		}
		this.d4q[h9q.y9f] = t7i.y5h;
		this.d4q[h9q.r7v] = h9q.o8r;
		if (h9q.v6x == t7i.v8p)
		{
			if ((h9q.r7v - h9q.y9f) == 16)
			{
				this.z0b.j0e = (h9q.y9f + 8);
			}
		}
		else if (h9q.v6x == t7i.w1f)
		{
			if (h9q.y9f == this.z0b.q5b)
			{
				this.z0b.y4g = false;
			}
			else if (h9q.y9f == this.z0b.k9b)
			{
				this.z0b.c5v = false;
			}
		}
		else if (h9q.v6x == t7i.q2q)
		{
			if (h9q.n9u())
			{
				if (h9q.r7v == p0k)
				{
					
					if (this.z0b.q5b != h9q.r7v)
					{
						this.d4q[this.z0b.q5b] = t7i.y5h;
					}
					this.d4q[e6a] = t7i.w1f;
				}
				else if (h9q.r7v == v3a)
				{
					
					if (this.z0b.k9b != h9q.r7v)
					{
						this.d4q[this.z0b.k9b] = t7i.y5h;
					}
					this.d4q[v1i] = t7i.w1f;
				}
			}
			this.z0b.y4g = false;
			this.z0b.c5v = false;
			this.whiteKing_ = h9q.r7v;
		}
	}
	else
	{
		if (h9q.m9o())
		{
			this.d4q[h9q.q9w] = t7i.y5h;
			if (h9q.n6v == t7i.w1f)
			{
				if (h9q.q9w == this.z0b.q5b)
				{
					this.z0b.y4g = false;
				}
				else if (h9q.q9w == this.z0b.k9b)
				{
					this.z0b.c5v = false;
				}
			}
		}
		this.d4q[h9q.y9f] = t7i.y5h;
		this.d4q[h9q.r7v] = h9q.o8r;
		if (h9q.v6x == t7i.z8f)
		{
			if ((h9q.r7v - h9q.y9f) == -16)
			{
				this.z0b.j0e = (h9q.y9f - 8);
			}
		}
		else if (h9q.v6x == t7i.x5l)
		{
			if (h9q.y9f == this.z0b.v6w)
			{
				this.z0b.e5v = false;
			}
			else if (h9q.y9f == this.z0b.n9v)
			{
				this.z0b.t8v = false;
			}
		}
		else if (h9q.v6x == t7i.c5p)
		{
			if (h9q.n9u())
			{
				if (h9q.r7v == j0r)
				{
					
					if (this.z0b.v6w != h9q.r7v)
					{
						this.d4q[this.z0b.v6w] = t7i.y5h;
					}
					this.d4q[g0i] = t7i.x5l;
				}
				else if (h9q.r7v == f1l)
				{
					
					if (this.z0b.n9v != h9q.r7v)
					{
						this.d4q[this.z0b.n9v] = t7i.y5h;
					}
					this.d4q[o5s] = t7i.x5l;
				}
			}
			this.z0b.e5v = false;
			this.z0b.t8v = false;
			this.blackKing_ = h9q.r7v;
		}
	}
	this.o3y();
}

j1b(h9q)
{
 	if (h9q.b3r())
	{
		this.o3y();
		return;
	}
	if (h9q.i2v())
	{
		this.d4q[h9q.r7v] = t7i.y5h;
		this.d4q[h9q.y9f] = h9q.v6x;
		if (h9q.v6x == t7i.q2q)
		{
			if (h9q.n9u())
			{
				if (h9q.r7v == p0k)
				{
					
					if (e6a != h9q.y9f)
					{
						this.d4q[e6a] = t7i.y5h;
					}
					this.d4q[this.z0b.q5b] = t7i.w1f;
				}
				else if (h9q.r7v == v3a)
				{
					
					if (v1i != h9q.y9f)
					{
						this.d4q[v1i] = t7i.y5h;
					}
					this.d4q[this.z0b.k9b] = t7i.w1f;
				}
			}
			this.whiteKing_ = h9q.y9f;
		}
		if (h9q.m9o())
		{
			this.d4q[h9q.q9w] = h9q.n6v;
		}
	}
	else
	{
		this.d4q[h9q.r7v] = t7i.y5h;
		this.d4q[h9q.y9f] = h9q.v6x;
		if (h9q.v6x == t7i.c5p)
		{
			if (h9q.n9u())
			{
				if (h9q.r7v == j0r)
				{
					
					if (g0i != h9q.y9f)
					{
						this.d4q[g0i] = t7i.y5h;
					}
					this.d4q[this.z0b.v6w] = t7i.x5l;
				}
				else if (h9q.r7v == f1l)
				{
					
					if (o5s != h9q.y9f)
					{
						this.d4q[o5s] = t7i.y5h;
					}
					this.d4q[this.z0b.n9v] = t7i.x5l;
				}
			}
			this.blackKing_ = h9q.y9f;
		}
		if (h9q.m9o())
		{
			this.d4q[h9q.q9w] = h9q.n6v;
		}
	}
	this.o3y();
}

q2q()
{
  return this.whiteKing_;
}

c5p()
{
  return this.blackKing_;
}

b3n()
{
	return this.z0b.c5v;
}

r1z()
{
	return this.z0b.y4g;
}

w7q()
{
	return this.z0b.t8v;
}

c8b()
{
	return this.z0b.e5v;
}

m6s()
{
  return this.z0b.m6s;
}

a2d()
{
  return this.z0b.a2d;
}

k9b()
{
  return this.z0b.k9b;
}

q5b()
{
  return this.z0b.q5b;
}

n9v()
{
  return this.z0b.n9v;
}

v6w()
{
  return this.z0b.v6w;
}

j0e()
{
  return this.z0b.j0e;
}

y7u()
{
	return this.z0b.i3i;
}

}
const s5z = 0;
const c3k   = 1;
const q1u  = s5z;

function d1y()
{
  let u1b = [];
	u1b.push("CBurnettt (Lichess)");
	u1b.push("Merida (Lichess)");
	return u1b;
}

class a2e
{

constructor()
{
	this.d5n = new t7f();
	this.m2y = null;
}

p7u()
{
	let m5h = new a2e();
	m5h.d5n = this.d5n.p7u();
	m5h.m2y = null;
	if (this.m2y)
	{
		m5h.m2y = this.m2y.p7u();
	}
	return m5h;
}

t6q(p8k)
{
	if (this.d5n.a6q(p8k))
	{
		return false;
	}
	return true;
}

a6q(p8k)
{
	return !this.t6q(p8k);
}

y5h()
{
	return this.d5n.y5h();
}

y9f()
{
	return this.d5n.y9f;
}

r7v()
{
	return this.d5n.r7v;
}

v6x()
{
	return this.d5n.v6x;
}

o8r()
{
	return this.d5n.o8r;
}

q9w()
{
	return this.d5n.q9w;
}

n6v()
{
	return this.d5n.n6v;
}

g1u()
{
	return this.d5n.g1u();
}

i2v()
{
	return this.d5n.i2v();
}

s5t()
{
	return this.d5n.s5t();
}

d5c()
{
	return this.d5n.d5c();
}

b3r()
{
	return this.d5n.b3r();
}

m9o()
{
	return this.d5n.m9o();
}

m7v()
{
	if (this.m2y == null)
	{
		this.m2y = new w2v();
	}
}

c4q()
{
	if (this.m2y)
	{
		if (this.m2y.y5h())
		{
			this.o9s();
		}
	}
}

q0y()
{
	return this.m2y != null;
}

o9s()
{
	this.m2y = null;
}

d5k(y5s)
{
	this.m7v();
	this.m2y = y5s.p7u();
}

r4c()
{
	return this.m2y;
}

d2q(p8k)
{
	if (this.m2y && !p8k.m2y)
	{
		return false;
	}
	if (!this.m2y && p8k.m2y)
	{
		return false;
	}
	if (!this.m2y && !p8k.m2y)
	{
		return true;
	}
	return this.m2y.t6q(p8k.m2y);
}

o5o()
{
	if (this.m2y)
	{
		this.m2y.y3a = '';
		this.c4q();
	}
}

d8m()
{
	if (this.m2y)
	{
		return this.m2y.y3a.length != 0;
	}
	else
	{
		return false;
	}
}

y3a()
{
	if (this.m2y)
	{
		return this.m2y.y3a;
	}
	else
	{
		return '';
	}
}

l8p(h7m)
{
	this.m7v();
	this.m2y.y3a = h7m;
	this.c4q();
}

j5q()
{
	if (this.m2y)
	{
		this.m2y.j9m = '';
		this.c4q();
	}
}

e3n()
{
	if (this.m2y)
	{
		return this.m2y.j9m.length != 0;
	}
	else
	{
		return false;
	}
}

j9m()
{
	if (this.m2y)
	{
		return this.m2y.j9m;
	}
	else
	{
		return '';
	}
}

g1t(h7m)
{
	this.m7v();
	this.m2y.j9m = h7m;
	this.c4q();
}

v7c()
{
	if (this.m2y)
	{
		this.m2y.e7j = n3d.m7l;
		this.c4q();
	}
}

x3l()
{
	if (this.m2y)
	{
		return this.m2y.e7j != n3d.m7l;
	}
	else
	{
		return false;
	}
}

e7j()
{
	if (this.m2y)
	{
		return this.m2y.e7j;
	}
	else
	{
		return n3d.m7l;
	}
}

c1m(e7j)
{
	this.m7v();
	this.m2y.e7j = e7j;
	this.c4q();
}

o1k()
{
	if (this.m2y)
	{
		this.m2y.style = h3e.m7l;
		this.c4q();
	}
}

d0v()
{
	if (this.m2y)
	{
		return this.m2y.style != h3e.m7l;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.m2y)
	{
		return this.m2y.style;
	}
	else
	{
		return h3e.m7l;
	}
}

a9t(style)
{
	this.m7v();
	this.m2y.style = style;
	this.c4q();
}

k5p()
{
	if (this.m2y)
	{
		this.m2y.value = z3q.m7l;
		this.c4q();
	}
}

s2g()
{
	if (this.m2y)
	{
		return this.m2y.value != z3q.m7l;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.m2y)
	{
		return this.m2y.value;
	}
	else
	{
		return z3q.m7l;
	}
}

j7w(value)
{
	this.m7v();
	this.m2y.value = value;
	this.c4q();
}

n9t()
{
	if (this.m2y)
	{
		this.m2y.v5n = s5r.m7l;
		this.c4q();
	}
}

o3j()
{
	if (this.m2y)
	{
		return this.m2y.v5n != s5r.m7l;
	}
	else
	{
		return false;
	}
}

v5n()
{
	if (this.m2y)
	{
		return this.m2y.v5n;
	}
	else
	{
		return s5r.m7l;
	}
}

m1v(v5n)
{
	this.m7v();
	this.m2y.v5n = v5n;
	this.c4q();
}

y5b()
{
  
}

n8q()
{
	if (this.m2y)
	{
 		if (this.m2y.y3a.length != 0)
    {
      let y1h = this.m2y.y3a.indexOf("[#]");
      return y1h != -1;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

p6y()
{
  
}

q9f()
{
	if (this.m2y)
	{
		this.m2y.b6h = false;
		this.c4q();
	}
}

r8s()
{
	if (this.m2y)
	{
		return this.m2y.b6h;
	}
	else
	{
		return false;
	}
}

p0i()
{
	this.m7v();
	this.m2y.b6h = true;
	this.c4q();
}

p7p()
{
	if (this.m2y)
	{
		this.m2y.m5c = false;
		this.c4q();
	}
}

j7x()
{
	if (this.m2y)
	{
		return this.m2y.m5c;
	}
	else
	{
		return false;
	}
}

y5i()
{
	this.m7v();
	this.m2y.m5c = true;
	this.c4q();
}

f9x()
{
	if (this.m2y)
	{
		this.m2y.t2v.k9s();
		this.m2y.z1b.k9s();
		this.c4q();
	}
}

g6a()
{
	if (this.m2y)
	{
		return this.n4g() || this.c5h();
	}
	else
	{
		return false;
	}
}

w2d()
{
	if (this.m2y)
	{
		this.m2y.t2v.k9s();
		this.c4q();
	}
}

n4g()
{
	if (this.m2y)
	{
		return !this.m2y.t2v.y5h();
	}
	else
	{
		return false;
	}
}

t2v()
{
	if (this.m2y)
	{
		return this.m2y.t2v.p7u();
	}
	else
	{
		return new o9p();
	}
}

c6y(t2v)
{
	this.m7v();
	this.m2y.t2v = t2v.p7u();
	this.c4q();
}

n7i()
{
	if (this.m2y)
	{
		this.m2y.z1b.k9s();
		this.c4q();
	}
}

c5h()
{
	if (this.m2y)
	{
		return !this.m2y.z1b.y5h();
	}
	else
	{
		return false;
	}
}

z1b()
{
	if (this.m2y)
	{
		return this.m2y.z1b.p7u();
	}
	else
	{
		return new h4e();
	}
}

o0a(z1b)
{
	this.m7v();
	this.m2y.z1b = z1b.p7u();
	this.c4q();
}

g3y()
{
	if (this.m2y)
	{
		this.m2y.w7v.i5r();
		this.c4q();
	}
}

w6t()
{
	if (this.m2y)
	{
		return this.m2y.w7v.s6l();
	}
	else
	{
		return false;
	}
}

w7v()
{
	if (this.m2y)
	{
		return this.m2y.w7v.p7u();
	}
	else
	{
		return new k1v();
	}
}

k1t(w7v)
{
	this.m7v();
	this.m2y.w7v = w7v.p7u();
	this.c4q();
}

d4y(r8w)
{
	this.d5n = r8w.p7u();
	this.m2y = null;
}

r8w()
{
	let r4s = new t7f();
  return Object.assign(r4s, this.d5n);
}

}

function u5v(r8w)
{
  let y0k = new a2e();
  y0k.d4y(r8w);
  return y0k;
}
class t7f
{

constructor()
{
	this.y9f = t8x;
	this.v6x = t7i.y5h;
	this.r7v = t8x;
	this.o8r = t7i.y5h;
	this.q9w = t8x;
	this.e4p = t7i.y5h;
	this.type = b1w.m7l;
}

p7u()
{
	let r4s = new t7f();
	r4s.y9f = this.y9f;
	r4s.v6x = this.v6x;
	r4s.r7v = this.r7v;
	r4s.o8r = this.o8r;
	r4s.q9w = this.q9w;
	r4s.n6v = this.n6v;
	r4s.type = this.type;
	return r4s;
}

t6q(p8k)
{
	if (
		this.y9f != p8k.y9f ||
		this.v6x != p8k.v6x ||
		this.r7v != p8k.r7v ||
		this.o8r != p8k.o8r ||
		this.q9w != p8k.q9w ||
		this.n6v != p8k.n6v ||
    this.type != p8k.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

a6q(p8k)
{
	return !this.t6q(p8k);
}

y5h()
{
	return this.type == b1w.m7l;
}

i2v()
{
	return this.v6x == t7i.v8p ||
		this.v6x == t7i.n7y ||
    this.v6x == t7i.p2j ||
    this.v6x == t7i.w1f ||
    this.v6x == t7i.w6r ||
    this.v6x == t7i.q2q;
}

s5t()
{
	return this.v6x == t7i.z8f ||
		this.v6x == t7i.b2f ||
    this.v6x == t7i.f0c ||
    this.v6x == t7i.x5l ||
    this.v6x == t7i.m0l ||
    this.v6x == t7i.c5p;
}

m9o()
{
	return this.q9w != t8x;
}

d5c()
{
	return this.v6x != this.o8r;
}

b1a()
{
  return this.type == b1w.p5v;
}

b3r()
{
	return this.type == b1w.m7l;
}

n9u()
{
	return this.type == b1w.z9d;
}

g1u()
{
	if (this.m9o())
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

}

var northSquares = [];
var northEastSquares = [];
var eastSquares = [];
var southEastSquares = [];
var southSquares = [];
var southWestSquares = [];
var westSquares = [];
var northWestSquares = [];

var northEastSquare = [];
var eastSquare = [];
var southEastSquare = [];
var southWestSquare =[];
var westSquare = [];
var northWestSquare = [];

var kingSquares = [];
var knightSquares = [];

var moveGeneratorInited = false;

function c1h(l3v, r8w)
{
	if (r8w.type == b1w.w2t)
	{
		l3v[r8w.r7v] = l3v[r8w.y9f];
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.p5v)
	{
		let q9w = (r8w.r7v - 8);
		l3v[q9w] = t7i.y5h;
		l3v[r8w.r7v] = t7i.v8p;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.p9y)
	{
		l3v[r8w.r7v] = t7i.w6r;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.o4e)
	{
		l3v[r8w.r7v] = t7i.w1f;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.r1d)
	{
		l3v[r8w.r7v] = t7i.p2j;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.j4j)
	{
		l3v[r8w.r7v] = t7i.n7y;
		l3v[r8w.y9f] = t7i.y5h;
	}
}

function l3a(l3v, r8w)
{
	if (r8w.type == b1w.w2t)
	{
		l3v[r8w.r7v] = l3v[r8w.y9f];
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.p5v)
	{
		let q9w = (r8w.r7v + 8);
		l3v[q9w] = t7i.y5h;
		l3v[r8w.r7v] = t7i.z8f;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.p9y)
	{
		l3v[r8w.r7v] = t7i.m0l;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.o4e)
	{
		l3v[r8w.r7v] = t7i.x5l;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.r1d)
	{
		l3v[r8w.r7v] = t7i.f0c;
		l3v[r8w.y9f] = t7i.y5h;
	}
	else if (r8w.type == b1w.j4j)
	{
		l3v[r8w.r7v] = t7i.b2f;
		l3v[r8w.y9f] = t7i.y5h;
	}
}

function k2l(l3v, r8w)
{
	if (r8w.r7v == p0k)
	{
		l3v[r8w.r7v] = t7i.q2q;
		l3v[r8w.y9f] = t7i.y5h;
		l3v[a1] = t7i.y5h; 
		l3v[e6a] = t7i.w1f;
	}
	else
	{
		l3v[r8w.r7v] = t7i.q2q;
		l3v[r8w.y9f] = t7i.y5h;
		l3v[b3k] = t7i.y5h; 
		l3v[v1i] = t7i.w1f;
	}
}

function c4j(l3v, r8w)
{
	if (r8w.r7v == j0r)
	{
		l3v[r8w.r7v] = t7i.c5p;
		l3v[r8w.y9f] = t7i.y5h;
		l3v[a8] = t7i.y5h; 
		l3v[g0i] = t7i.x5l;
	}
	else
	{
		l3v[r8w.r7v] = t7i.c5p;
		l3v[r8w.y9f] = t7i.y5h;
		l3v[t1h] = t7i.y5h; 
		l3v[o5s] = t7i.x5l;
	}
}

function w8v(l3v, r8w, o8q)
{
	if (r8w.r7v == p0k)
	{
		l3v[r8w.r7v] = t7i.q2q;
		l3v[r8w.y9f] = t7i.y5h;
		if (o8q.q5b != r8w.r7v)
		{
			l3v[o8q.q5b] = t7i.y5h;
		}
		l3v[e6a] = t7i.w1f;
	}
	else if (r8w.r7v == v3a)
	{
		l3v[r8w.r7v] = t7i.q2q;
		l3v[r8w.y9f] = t7i.y5h;
		if (o8q.k9b != r8w.r7v)
		{
			l3v[o8q.k9b] = t7i.y5h;
		}
		l3v[v1i] = t7i.w1f;
	}
}

function j2i(l3v, r8w, o8q)
{
	if (r8w.r7v == j0r)
	{
		l3v[r8w.r7v] = t7i.c5p;
		l3v[r8w.y9f] = t7i.y5h;
		if (o8q.v6w != r8w.r7v)
		{
			l3v[o8q.v6w] = t7i.y5h;
		}
		l3v[g0i] = t7i.x5l;
	}
	else if (r8w.r7v == f1l)
	{
		l3v[r8w.r7v] = t7i.c5p;
		l3v[r8w.y9f] = t7i.y5h;
		if (o8q.n9v != r8w.r7v)
		{
			l3v[o8q.n9v] = t7i.y5h;
		}
		l3v[o5s] = t7i.x5l;
	}
}

function h4j(i0f, r8w)
{
	let o6g = i0f.q2q();
	if (o6g == t8x) return true;
	if (r8w.v6x == t7i.q2q)
	{
		o6g = r8w.r7v;
	}
	let l3v = i0f.l3v();
	if (r8w.type == b1w.z9d)
	{
		if (i0f.y7u())
		{
			w8v(l3v, r8w, i0f.o8q());
		}
		else
		{
			k2l(l3v, r8w);
		}
	}
	else
	{
		c1h(l3v, r8w);
	}
	return !q1k(l3v, o6g);
}

function h8e(i0f, r8w)
{
	let o6g = i0f.c5p();
	if (o6g == t8x) return true;
	if (r8w.v6x == t7i.c5p)
	{
		o6g = r8w.r7v;
	}
	let l3v = i0f.l3v();
	if (r8w.type == b1w.z9d)
	{
		if (i0f.y7u())
		{
			j2i(l3v, r8w, i0f.o8q());
		}
		else
		{
			c4j(l3v, r8w);
		}
	}
	else
	{
		l3a(l3v, r8w);
	}
	return !h3g(l3v, o6g);
}

function u8s(t0d, i0f, y9f)
{
	if (y4r(y9f) == k3e)
	{
		return;
	}
	q0g(t0d, i0f, y9f);
	let r7v = northWestSquare[y9f];
	if (r7v != t8x)
	{
		h8d(t0d, i0f, y9f, r7v);
	}
	r7v = northEastSquare[y9f];
	if (r7v != t8x)
	{
		h8d(t0d, i0f, y9f, r7v);
	}
}

function m4f(t0d, i0f, y9f)
{
	if (y4r(y9f) == rank_1)
	{
		return;
	}
	r7g(t0d, i0f, y9f);
	let r7v = southEastSquare[y9f];
	if (r7v != t8x)
	{
		r1j(t0d, i0f, y9f, r7v);
	}
	r7v = southWestSquare[y9f];
	if (r7v != t8x)
	{
		r1j(t0d, i0f, y9f, r7v);
	}
}

function q0g(t0d, i0f, y9f)
{
	let r7v = (y9f + t4t);
	if (i0f.c2z(r7v))
	{
		if (y4r(y9f) == u3q)
		{
			p8y(t0d, i0f, y9f, r7v);
		}
		else
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
			if (y4r(y9f) == e7l)
			{
				let r7v = (y9f + t4t + t4t);
				if (i0f.c2z(r7v))
				{
					q9u(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
	}
}

function r7g(t0d, i0f, y9f)
{
	let r7v = (y9f + y7g);
	if (i0f.c2z(r7v))
	{
		if (y4r(y9f) == e7l)
		{
			a5o(t0d, i0f, y9f, r7v);
		}
		else
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
			if (y4r(y9f) == u3q)
			{
				let r7v = (y9f + y7g + y7g);
				if (i0f.c2z(r7v))
				{
					q9u(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
	}
}

function h8d(t0d, i0f, y9f, r7v)
{
	if (!i0f.s5t(r7v))
	{
		return;
	}
	if (y4r(y9f) == u3q)
	{
		s7x(t0d, i0f, y9f, r7v);
	}
	else
	{
		x8q(t0d, i0f, y9f, r7v, b1w.w2t);
	}
}

function r1j(t0d, i0f, y9f, r7v)
{
	if (!i0f.i2v(r7v))
	{
		return;
	}
	if (y4r(y9f) == e7l)
	{
		s7t(t0d, i0f, y9f, r7v);
	}
	else
	{
		x8q(t0d, i0f, y9f, r7v, b1w.w2t);
	}
}

function m4c(t0d, i0f, y9f, y6r)
{
	for (const r7v of y6r)
	{
		if (i0f.c2z(r7v))
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
		else if (i0f.s5t(r7v))
		{
			x8q(t0d, i0f, y9f, r7v, b1w.w2t);
		}
	}
}

function m8v(t0d, i0f, y9f, y6r)
{
	for (const r7v of y6r)
	{
		if (i0f.c2z(r7v))
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
		else if (i0f.i2v(r7v))
		{
			x8q(t0d, i0f, y9f, r7v, b1w.w2t);
		}
	}
}

function m7s(t0d, i0f, y9f)
{
	m4c(t0d, i0f, y9f, knightSquares[y9f]);
}

function l2h(t0d, i0f, y9f)
{
	m8v(t0d, i0f, y9f, knightSquares[y9f]);
}

function q6t(t0d, i0f, y9f)
{
	t0x(t0d, i0f, y9f, northEastSquares[y9f]);
	t0x(t0d, i0f, y9f, southEastSquares[y9f]);
	t0x(t0d, i0f, y9f, southWestSquares[y9f]);
	t0x(t0d, i0f, y9f, northWestSquares[y9f]);
}

function e2q(t0d, i0f, y9f)
{
	b4n(t0d, i0f, y9f, northEastSquares[y9f]);
	b4n(t0d, i0f, y9f, southEastSquares[y9f]);
	b4n(t0d, i0f, y9f, southWestSquares[y9f]);
	b4n(t0d, i0f, y9f, northWestSquares[y9f]);
}

function a3z(t0d, i0f, y9f)
{
	t0x(t0d, i0f, y9f, northSquares[y9f]);
	t0x(t0d, i0f, y9f, eastSquares[y9f]);
	t0x(t0d, i0f, y9f, southSquares[y9f]);
	t0x(t0d, i0f, y9f, westSquares[y9f]);
}

function w0j(t0d, i0f, y9f)
{
	b4n(t0d, i0f, y9f, northSquares[y9f]);
	b4n(t0d, i0f, y9f, eastSquares[y9f]);
	b4n(t0d, i0f, y9f, southSquares[y9f]);
	b4n(t0d, i0f, y9f, westSquares[y9f]);
}

function o4u(t0d, i0f, y9f)
{
	t0x(t0d, i0f, y9f, northSquares[y9f]);
	t0x(t0d, i0f, y9f, northEastSquares[y9f]);
	t0x(t0d, i0f, y9f, eastSquares[y9f]);
	t0x(t0d, i0f, y9f, southEastSquares[y9f]);
	t0x(t0d, i0f, y9f, southSquares[y9f]);
	t0x(t0d, i0f, y9f, southWestSquares[y9f]);
	t0x(t0d, i0f, y9f, westSquares[y9f]);
	t0x(t0d, i0f, y9f, northWestSquares[y9f]);
}

function f8z(t0d, i0f, y9f)
{
	b4n(t0d, i0f, y9f, northSquares[y9f]);
	b4n(t0d, i0f, y9f, northEastSquares[y9f]);
	b4n(t0d, i0f, y9f, eastSquares[y9f]);
	b4n(t0d, i0f, y9f, southEastSquares[y9f]);
	b4n(t0d, i0f, y9f, southSquares[y9f]);
	b4n(t0d, i0f, y9f, southWestSquares[y9f]);
	b4n(t0d, i0f, y9f, westSquares[y9f]);
	b4n(t0d, i0f, y9f, northWestSquares[y9f]);
}

function f7w(t0d, i0f, y9f)
{
	t6u(t0d, i0f, y9f, kingSquares[y9f]);
}

function d4o(t0d, i0f, y9f)
{
	i9z(t0d, i0f, y9f, kingSquares[y9f]);
}

function t0x(t0d, i0f, y9f, y6r)
{
	for (const r7v of y6r)
	{
		if (i0f.c2z(r7v))
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
		else if (i0f.i2v(r7v))
		{
			break;
		}
		else
		{
			x8q(t0d, i0f, y9f, r7v, b1w.w2t);
			break;
		}
	}
}

function b4n(t0d, i0f, y9f, y6r)
{
	for (const r7v of y6r)
	{
		if (i0f.c2z(r7v))
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
		else if (i0f.s5t(r7v))
		{
			break;
		}
		else
		{
			x8q(t0d, i0f, y9f, r7v, b1w.w2t);
			break;
		}
	}
}

function t6u(t0d, i0f, y9f, y6r)
{
	for (const r7v of y6r)
	{
		if (i0f.c2z(r7v))
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
		else if (i0f.s5t(r7v))
		{
			x8q(t0d, i0f, y9f, r7v, b1w.w2t);
		}
	}
}

function i9z(t0d, i0f, y9f, y6r)
{
	for (const r7v of y6r)
	{
		if (i0f.c2z(r7v))
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
		else if (i0f.i2v(r7v))
		{
			x8q(t0d, i0f, y9f, r7v, b1w.w2t);
		}
	}
}

function c1w(left, h8i)
{
	let p0w = [];
	if (left > h8i)
	{
    let a4c = left;
    left = h8i;
    h8i = a4c;
	}
	for (let i = left + 1; i < h8i; i++)
	{
		p0w.push(i);
	}
	return p0w;
}

function k3w(t0d, i0f)
{
	if (!i0f.x6j(i0f.m6s()))
	{
		return;
	}
	if (!i0f.o0o(i0f.q5b()))
	{
		return;
	}
	let n8p = c1w(i0f.q5b(), e6a);
  for (const s4c of n8p)
	{
		if (s4c != i0f.m6s())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
	let j2m = c1w(i0f.m6s(), p0k);
  for (const s4c of j2m)
	{
		if (s4c != i0f.q5b())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
  for (const s4c of j2m)
	{
		if (r8v(i0f, s4c))
		{
			return;
		}
	}
	if (r8v(i0f, i0f.m6s()))
	{
		return;
	}
	if (i0f.m6s() != p0k)
	{
		if (!i0f.c2z(p0k))
		{
			if (p0k != i0f.q5b())
			{
				return;
			}
		}
	}
	if (i0f.q5b() != e6a)
	{
		if (!i0f.c2z(e6a))
		{
			if (e6a != i0f.m6s())
			{
				return;
			}
		}
	}
	q9u(t0d, i0f, i0f.m6s(), p0k, b1w.z9d);
}

function y8f(t0d, i0f)
{
	if (!i0f.x6j(i0f.m6s()))
	{
		return;
	}
	if (!i0f.o0o(i0f.k9b()))
	{
		return;
	}
	let n8p = c1w(i0f.k9b(), v1i);
  for (const s4c of n8p)
	{
		if (s4c != i0f.m6s())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
	let j2m = c1w(i0f.m6s(), v3a);
  for (const s4c of j2m)
	{
		if (s4c != i0f.k9b())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
  for (const s4c of j2m)
	{
		if (r8v(i0f, s4c))
		{
			return;
		}
	}
	if (r8v(i0f, i0f.m6s()))
	{
		return;
	}
	if (i0f.m6s() != v3a)
	{
		if (!i0f.c2z(v3a))
		{
			if (v3a != i0f.k9b())
			{
				return;
			}
		}
	}
	if (i0f.k9b() != v1i)
	{
		if (!i0f.c2z(v1i))
		{
			if (v1i != i0f.m6s())
			{
				return;
			}
		}
	}
	q9u(t0d, i0f, i0f.m6s(), v3a, b1w.z9d);
}

function e3a(t0d, i0f)
{
	if (!i0f.d6d(i0f.a2d()))
	{
		return;
	}
	if (!i0f.h8a(i0f.n9v()))
	{
		return;
	}
	let n8p = c1w(i0f.n9v(), o5s);
  for (const s4c of n8p)
	{
		if (s4c != i0f.a2d())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
	let j2m = c1w(i0f.a2d(), f1l);
  for (const s4c of j2m)
	{
		if (s4c != i0f.n9v())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
  for (const s4c of j2m)
	{
		if (r0f(i0f, s4c))
		{
			return;
		}
	}
	if (r0f(i0f, i0f.a2d()))
	{
		return;
	}
	if (i0f.a2d() != f1l)
	{
		if (!i0f.c2z(f1l))
		{
			if (f1l != i0f.n9v())
			{
				return;
			}
		}
	}
	if (i0f.n9v() != o5s)
	{
		if (!i0f.c2z(o5s))
		{
			if (o5s != i0f.a2d())
			{
				return;
			}
		}
	}
	q9u(t0d, i0f, i0f.a2d(), f1l, b1w.z9d);
}

function c7y(t0d, i0f)
{
	if (!i0f.d6d(i0f.a2d()))
	{
		return;
	}
	if (!i0f.h8a(i0f.v6w()))
	{
		return;
	}
	let n8p = c1w(i0f.v6w(), g0i);
  for (const s4c of n8p)
	{
		if (s4c != i0f.a2d())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
	let j2m = c1w(i0f.a2d(), j0r);
  for (const s4c of j2m)
	{
		if (s4c != i0f.v6w())
		{
			if (!i0f.c2z(s4c))
			{
				return;
			}
		}
	}
  for (const s4c of j2m)
	{
		if (r0f(i0f, s4c))
		{
			return;
		}
	}
	if (r0f(i0f, i0f.a2d()))
	{
		return;
	}
	if (i0f.a2d() != j0r)
	{
		if (!i0f.c2z(j0r))
		{
			if (j0r != i0f.v6w())
			{
				return;
			}
		}
	}
	if (i0f.v6w() != g0i)
	{
		if (!i0f.c2z(g0i))
		{
			if (g0i != i0f.a2d())
			{
				return;
			}
		}
	}
	q9u(t0d, i0f, i0f.a2d(), j0r, b1w.z9d);
}

function t7g(t0d, i0f)
{
	if (!i0f.x6j(i0f.m6s()))
	{
		return;
	}
	if (!i0f.o0o(i0f.q5b()))
	{
		return;
	}
	if (!i0f.c2z(n3i))
	{
		return;
	}
	if (!i0f.c2z(n9a))
	{
		return;
	}
	if (!i0f.c2z(m2a))
	{
		return;
	}
	if (r8v(i0f, i0f.m6s()))
	{
		return;
	}
	if (r8v(i0f, m2a))
	{
		return;
	}
	q9u(t0d, i0f, i0f.m6s(), p0k, b1w.z9d);
}

function g0u(t0d, i0f)
{
	if (!i0f.x6j(i0f.m6s()))
	{
		return;
	}
	if (!i0f.o0o(i0f.k9b()))
	{
		return;
	}
	if (!i0f.c2z(y3o))
	{
		return;
	}
	if (!i0f.c2z(q6l))
	{
		return;
	}
	if (r8v(i0f, i0f.m6s()))
	{
		return;
	}
	if (r8v(i0f, y3o))
	{
		return;
	}
	q9u(t0d, i0f, i0f.m6s(), v3a, b1w.z9d);
}

function b0n(t0d, i0f)
{
	if (!i0f.d6d(i0f.a2d()))
	{
		return;
	}
	if (!i0f.h8a(i0f.v6w()))
	{
		return;
	}
	if (!i0f.c2z(i0m))
	{
		return;
	}
	if (!i0f.c2z(k7j))
	{
		return;
	}
	if (!i0f.c2z(c4a))
	{
		return;
	}
	if (r0f(i0f, i0f.a2d()))
	{
		return;
	}
	if (r0f(i0f, c4a))
	{
		return;
	}
	q9u(t0d, i0f, i0f.a2d(), j0r, b1w.z9d);
}

function x1n(t0d, i0f)
{
	if (!i0f.d6d(i0f.a2d()))
	{
		return;
	}
	if (!i0f.h8a(i0f.n9v()))
	{
		return;
	}
	if (!i0f.c2z(p2l))
	{
		return;
	}
	if (!i0f.c2z(h0t))
	{
		return;
	}
	if (r0f(i0f, i0f.a2d()))
	{
		return;
	}
	if (r0f(i0f, p2l))
	{
		return;
	}
	q9u(t0d, i0f, i0f.a2d(), f1l, b1w.z9d);
}

function v8c(t0d, i0f)
{
	if (i0f.y7u())
	{
		k3w(t0d, i0f);
	}
	else
	{
		t7g(t0d, i0f);
	}
}

function s6f(t0d, i0f)
{
	if (i0f.y7u())
	{
		y8f(t0d, i0f);
	}
	else
	{
		g0u(t0d, i0f);
	}
}

function q5t(t0d, i0f)
{
	if (i0f.r1z())
	{
		v8c(t0d, i0f);
	}
	if (i0f.b3n())
	{
		s6f(t0d, i0f);
	}
}

function g1f(t0d, i0f)
{
	if (i0f.y7u())
	{
		c7y(t0d, i0f);
	}
	else
	{
		b0n(t0d, i0f);
	}
}

function h9y(t0d, i0f)
{
	if (i0f.y7u())
	{
		e3a(t0d, i0f);
	}
	else
	{
		x1n(t0d, i0f);
	}
}

function l4c(t0d, i0f)
{
	if (i0f.c8b())
	{
		g1f(t0d, i0f);
	}
	if (i0f.w7q())
	{
		h9y(t0d, i0f);
	}
}

function g9n(t0d, i0f)
{
	if (i0f.j0e() == t8x)
	{
		return;
	}
	if (y4r(i0f.j0e()) != m5j)
	{
		return;
	}
	if (!i0f.c2z(i0f.j0e()))
	{
		return;
	}
	let s9t = (i0f.j0e() + 8);
	if (!i0f.c2z(s9t))
	{
		return;
	}
	let f9y = (i0f.j0e() - 8);
	if (!i0f.e7q(f9y))
	{
		return;
	}
	let c1u = westSquare[f9y];
	if (c1u != t8x)
	{
		if (i0f.y7o(c1u))
		{
			j7n(t0d, i0f, c1u, t7i.v8p, i0f.j0e(),
				t7i.v8p, f9y, t7i.z8f, b1w.p5v);
		}
	}
	c1u = eastSquare[f9y];
	if (c1u != t8x)
	{
		if (i0f.y7o(c1u))
		{
			j7n(t0d, i0f, c1u, t7i.v8p, i0f.j0e(),
				t7i.v8p, f9y, t7i.z8f, b1w.p5v);
		}
	}
}

function u0j(t0d, i0f)
{
	if (i0f.j0e() == t8x)
	{
		return;
	}
	if (y4r(i0f.j0e()) != z0p)
	{
		return;
	}
	if (!i0f.c2z(i0f.j0e()))
	{
		return;
	}
	let s9t = (i0f.j0e() - 8);
	if (!i0f.c2z(s9t))
	{
		return;
	}
	let f9y = (i0f.j0e() + 8);
	if (!i0f.y7o(f9y))
	{
		return;
	}
	let c1u = westSquare[f9y];
	if (c1u != t8x)
	{
		if (i0f.e7q(c1u))
		{
			j7n(t0d, i0f, c1u, t7i.z8f, i0f.j0e(),
				t7i.z8f, f9y, t7i.v8p, b1w.p5v);
		}
	}
	c1u = eastSquare[f9y];
	if (c1u != t8x)
	{
		if (i0f.e7q(c1u))
		{
			j7n(t0d, i0f, c1u, t7i.z8f, i0f.j0e(),
				t7i.z8f, f9y, t7i.v8p, b1w.p5v);
		}
	}
}

function j7n(t0d, i0f, y9f, v6x, r7v, o8r, q9w, n6v, type)
{
  let h9q = new t7f();
	h9q.y9f = y9f;
	h9q.v6x = v6x;
	h9q.r7v = r7v;
	h9q.o8r = o8r;
	h9q.q9w = q9w;
	h9q.n6v = n6v;
	h9q.type = type;
	if (i2v(v6x))
	{
		if (h4j(i0f, h9q))
		{
			t0d.push(h9q);
		}
	}
	else
	{
		if (h8e(i0f, h9q))
		{
			t0d.push(h9q);
		}
	}
}

function q9u(t0d, i0f, y9f, r7v, type)
{
	let n2f = i0f.h7c(y9f);
	j7n(t0d, i0f, y9f, n2f, r7v, n2f, t8x, t7i.y5h, type);
}

function x8q(t0d, i0f, y9f, r7v, type)
{
	let n2f = i0f.h7c(y9f);
	let n6v = i0f.h7c(r7v);
	j7n(t0d, i0f, y9f, n2f, r7v, n2f, r7v, n6v, type);
}

function p8y(t0d, i0f, y9f, r7v)
{
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.n7y, t8x, t7i.y5h, b1w.j4j);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.p2j, t8x, t7i.y5h, b1w.r1d);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.w1f, t8x, t7i.y5h, b1w.o4e);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.w6r, t8x, t7i.y5h, b1w.p9y);
}

function a5o(t0d, i0f, y9f, r7v)
{
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.b2f, t8x, t7i.y5h, b1w.j4j);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.f0c, t8x, t7i.y5h, b1w.r1d);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.x5l, t8x, t7i.y5h, b1w.o4e);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.m0l, t8x, t7i.y5h, b1w.p9y);
}

function s7x(t0d, i0f, y9f, r7v)
{
	let n6v = i0f.h7c(r7v);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.n7y, r7v, n6v, b1w.j4j);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.p2j, r7v, n6v, b1w.r1d);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.w1f, r7v, n6v, b1w.o4e);
	j7n(t0d, i0f, y9f, t7i.v8p, r7v, t7i.w6r, r7v, n6v, b1w.p9y);
}

function s7t(t0d, i0f, y9f, r7v)
{
	let n6v = i0f.h7c(r7v);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.b2f, r7v, n6v, b1w.j4j);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.f0c, r7v, n6v, b1w.r1d);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.x5l, r7v, n6v, b1w.o4e);
	j7n(t0d, i0f, y9f, t7i.z8f, r7v, t7i.m0l, r7v, n6v, b1w.p9y);
}

function x8y(t0d, i0f, r7v)
{
	let y9f = (r7v - t4t);
	if (i0f.y7o(y9f))
	{
		if (y4r(y9f) == u3q)
		{
			p8y(t0d, i0f, y9f, r7v);
		}
		else
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
	}
	else
	{
		if (i0f.c2z(y9f))
		{
			if (y4r(r7v) == q3z)
			{
				y9f = (r7v - t4t - t4t);
				if (i0f.y7o(y9f))
				{
					q9u(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
	}

	if (i0f.s5t(r7v))
	{
		let y9f = southWestSquare[r7v];
		if (y9f != t8x)
		{
			if (i0f.y7o(y9f))
			{
				if (y4r(y9f) == u3q)
				{
					s7x(t0d, i0f, y9f, r7v);
				}
				else
				{
					x8q(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
		y9f = southEastSquare[r7v];
		if (y9f != t8x)
		{
			if (i0f.y7o(y9f))
			{
				if (y4r(y9f) == u3q)
				{
					s7x(t0d, i0f, y9f, r7v);
				}
				else
				{
					x8q(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
	}

	if (i0f.j0e() == r7v)
	{
		let s9t = (i0f.j0e() + 8);
		if (!i0f.c2z(s9t))
		{
			return;
		}
		let f9y = (i0f.j0e() - 8);
		if (!i0f.e7q(f9y))
		{
			return;
		}
		let c1u = westSquare[f9y];
		if (c1u != t8x)
		{
			if (i0f.y7o(c1u))
			{
				j7n(t0d, i0f, c1u, t7i.v8p, i0f.j0e(),
					t7i.v8p, f9y, t7i.z8f, b1w.p5v);
			}
		}
		c1u = eastSquare[f9y];
		if (c1u != t8x)
		{
			if (i0f.y7o(c1u))
			{
				j7n(t0d, i0f, c1u, t7i.v8p, i0f.j0e(),
					t7i.v8p, f9y, t7i.z8f, b1w.p5v);
			}
		}
	}
}

function x3o(t0d, i0f, r7v)
{
	let y9f = (r7v - y7g);
	if (i0f.e7q(y9f))
	{
		if (y4r(y9f) == e7l)
		{
			a5o(t0d, i0f, y9f, r7v);
		}
		else
		{
			q9u(t0d, i0f, y9f, r7v, b1w.w2t);
		}
	}
	else
	{
		if (i0f.c2z(y9f))
		{
			if (y4r(r7v) == n7w)
			{
				y9f = (r7v - y7g - y7g);
				if (i0f.e7q(y9f))
				{
					q9u(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
	}

	if (i0f.i2v(r7v))
	{
		let y9f = northWestSquare[r7v];
		if (y9f != t8x)
		{
			if (i0f.e7q(y9f))
			{
				if (y4r(y9f) == e7l)
				{
					s7t(t0d, i0f, y9f, r7v);
				}
				else
				{
					x8q(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
		y9f = northEastSquare[r7v];
		if (y9f != t8x)
		{
			if (i0f.e7q(y9f))
			{
				if (y4r(y9f) == e7l)
				{
					s7t(t0d, i0f, y9f, r7v);
				}
				else
				{
					x8q(t0d, i0f, y9f, r7v, b1w.w2t);
				}
			}
		}
	}

	if (i0f.j0e() == r7v)
	{
		let s9t = (i0f.j0e() - 8);
		if (!i0f.c2z(s9t))
		{
			return;
		}
		let f9y = (i0f.j0e() + 8);
		if (!i0f.y7o(f9y))
		{
			return;
		}
		let c1u = westSquare[f9y];
		if (c1u != t8x)
		{
			if (i0f.e7q(c1u))
			{
				j7n(t0d, i0f, c1u, t7i.z8f, i0f.j0e(),
					t7i.z8f, f9y, t7i.v8p, b1w.p5v);
			}
		}
		c1u = eastSquare[f9y];
		if (c1u != t8x)
		{
			if (i0f.e7q(c1u))
			{
				j7n(t0d, i0f, c1u, t7i.z8f, i0f.j0e(),
					t7i.z8f, f9y, t7i.v8p, b1w.p5v);
			}
		}
	}
}

function z5i(t0d, i0f, r7v, n2f)
{
	b4q(t0d, i0f, r7v, knightSquares[r7v], n2f);
}

function j6n(t0d, i0f, r7v, n2f)
{
	d8b(t0d, i0f, r7v, northEastSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, southEastSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, southWestSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, northWestSquares[r7v], n2f);
}

function p2w(t0d, i0f, r7v, n2f)
{
	d8b(t0d, i0f, r7v, northSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, eastSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, southSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, westSquares[r7v], n2f);
}

function a1j(t0d, i0f, r7v, n2f)
{
	d8b(t0d, i0f, r7v, northSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, northEastSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, eastSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, southEastSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, southSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, southWestSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, westSquares[r7v], n2f);
	d8b(t0d, i0f, r7v, northWestSquares[r7v], n2f);
}

function l0f(t0d, i0f, r7v, n2f)
{
	m5z(t0d, i0f, r7v, kingSquares[r7v], n2f);
}

function d8b(t0d, i0f, r7v, z1j, n2f)
{
  for (const y9f of z1j)
	{
		if (i0f.h7c(y9f) == n2f)
		{
			if (i0f.c2z(r7v))
			{
				q9u(t0d, i0f, y9f, r7v, b1w.w2t);
			}
			else
			{
				x8q(t0d, i0f, y9f, r7v, b1w.w2t);
			}
			break;
		}
		else
		{
			if (!i0f.c2z(y9f))
			{
				break;
			}
		}
	}
}

function m5z(t0d, i0f, r7v, z1j, n2f)
{
  for (const y9f of z1j)
	{
		if (i0f.h7c(y9f) == n2f)
		{
			if (i0f.c2z(r7v))
			{
				q9u(t0d, i0f, y9f, r7v, b1w.w2t);
				break;
			}
			else
			{
				x8q(t0d, i0f, y9f, r7v, b1w.w2t);
				break;
			}
		}
	}
}

function b4q(t0d, i0f, r7v, z1j, n2f)
{
  for (const y9f of z1j)
	{
		if (i0f.h7c(y9f) == n2f)
		{
			if (i0f.c2z(r7v))
			{
				q9u(t0d, i0f, y9f, r7v, b1w.w2t);
				
			}
			else
			{
				x8q(t0d, i0f, y9f, r7v, b1w.w2t);
				
			}
		}
	}
}

function k7u(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] != t7i.y5h)
		{
			if (s5t(l3v[r7v]))
			{
				return false;
			}
			else
			{
				if (l3v[r7v] == t7i.p2j || l3v[r7v] == t7i.w6r)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j4c(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] != t7i.y5h)
		{
			if (s5t(l3v[r7v]))
			{
				return false;
			}
			else
			{
				if (l3v[r7v] == t7i.w1f || l3v[r7v] == t7i.w6r)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function t0c(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] != t7i.y5h)
		{
			if (s5t(l3v[r7v]))
			{
				return false;
			}
			else
			{
				if (l3v[r7v] == t7i.w1f || l3v[r7v] == t7i.w6r)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function h9a(l3v, r7v)
{
	if (r7v == t8x)
	{
		return false;
	}
	if (l3v[r7v] == t7i.v8p)
	{
		return true;
	}
	return false;
}

function i8x(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] == t7i.n7y)
		{
			return true;
		}
	}
	return false;
}

function w6o(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] == t7i.q2q)
		{
			return true;
		}
	}
	return false;
}

function k2n(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] != t7i.y5h)
		{
			if (i2v(l3v[r7v]))
			{
				return false;
			}
			else
			{
				if (l3v[r7v] == t7i.f0c || l3v[r7v] == t7i.m0l)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function f2f(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] != t7i.y5h)
		{
			if (i2v(l3v[r7v]))
			{
				return false;
			}
			else
			{
				if (l3v[r7v] == t7i.x5l || l3v[r7v] == t7i.m0l)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function w8m(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] != t7i.y5h)
		{
			if (i2v(l3v[r7v]))
			{
				return false;
			}
			else
			{
				if (l3v[r7v] == t7i.x5l || l3v[r7v] == t7i.m0l)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x1h(l3v, r7v)
{
	if (r7v == t8x)
	{
		return false;
	}
	if (l3v[r7v] == t7i.z8f)
	{
		return true;
	}
	return false;
}

function t5m(l3v, y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] == t7i.b2f)
		{
			return true;
		}
	}
	return false;
}

function a9l(l3v,  y6r)
{
  for (const r7v of y6r)
	{
		if (l3v[r7v] == t7i.c5p)
		{
			return true;
		}
	}
	return false;
}

function p4b(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (!i0f.c2z(r7v))
		{
			if (i0f.s5t(r7v))
			{
				return false;
			}
			else
			{
				if (i0f.n4c(r7v) || i0f.k7d(r7v))
				{
					r2y = r7v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function p3q(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (!i0f.c2z(r7v))
		{
			if (i0f.i2v(r7v))
			{
				return false;
			}
			else
			{
				if (i0f.l7n(r7v) || i0f.y6g(r7v))
				{
					r2y = r7v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function c0o(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (!i0f.c2z(r7v))
		{
			if (i0f.s5t(r7v))
			{
				return false;
			}
			else
			{
				if (i0f.o0o(r7v) || i0f.k7d(r7v))
				{
					r2y = r7v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function b3d(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (!i0f.c2z(r7v))
		{
			if (i0f.i2v(r7v))
			{
				return false;
			}
			else
			{
				if (i0f.h8a(r7v) || i0f.y6g(r7v))
				{
					r2y = r7v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function i5n(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (!i0f.c2z(r7v))
		{
			if (i0f.s5t(r7v))
			{
				return false;
			}
			else
			{
				if (i0f.o0o(r7v) || i0f.k7d(r7v))
				{
					r2y = r7v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z1l(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (!i0f.c2z(r7v))
		{
			if (i0f.i2v(r7v))
			{
				return false;
			}
			else
			{
				if (i0f.h8a(r7v) || i0f.y6g(r7v))
				{
					r2y = r7v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g1i(i0f, r7v)
{
	if (r7v == t8x)
	{
		return false;
	}
	if (i0f.y7o(r7v))
	{
		return true;
	}
	return false;
}

function k1g(i0f, r7v)
{
	if (r7v == t8x)
	{
		return false;
	}
	if (i0f.e7q(r7v))
	{
		return true;
	}
	return false;
}

function k5f(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (i0f.d8v(r7v))
		{
			r2y = r7v;
			return true;
		}
	}
	return false;
}



function z3o(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (i0f.l3l(r7v))
		{
			r2y = r7v;
			return true;
		}
	}
	return false;
}

function j8k(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (i0f.x6j(r7v))
		{
			r2y = r7v;
			return true;
		}
	}
	return false;
}

function f7r(i0f, y6r, r2y)
{
  for (const r7v of y6r)
	{
		if (i0f.d6d(r7v))
		{
			r2y = r7v;
			return true;
		}
	}
	return false;
}

function h3g(l3v, s4c)
{
	if (k7u(l3v, northEastSquares[s4c])) return true;
	if (k7u(l3v, southEastSquares[s4c])) return true;
	if (k7u(l3v, southWestSquares[s4c])) return true;
	if (k7u(l3v, northWestSquares[s4c])) return true;
	if (j4c(l3v, northSquares[s4c])) return true;
	if (t0c(l3v, eastSquares[s4c])) return true;
	if (j4c(l3v, southSquares[s4c])) return true;
	if (t0c(l3v, westSquares[s4c])) return true;
	if (h9a(l3v, southEastSquare[s4c])) return true;
	if (h9a(l3v, southWestSquare[s4c])) return true;
	if (i8x(l3v, knightSquares[s4c])) return true;
	if (w6o(l3v, kingSquares[s4c])) return true;
	return false;
}

function q1k(l3v, s4c)
{
	if (k2n(l3v, northEastSquares[s4c])) return true;
	if (k2n(l3v, southEastSquares[s4c])) return true;
	if (k2n(l3v, southWestSquares[s4c])) return true;
	if (k2n(l3v, northWestSquares[s4c])) return true;
	if (f2f(l3v, northSquares[s4c])) return true;
	if (w8m(l3v, eastSquares[s4c])) return true;
	if (f2f(l3v, southSquares[s4c])) return true;
	if (w8m(l3v, westSquares[s4c])) return true;
	if (x1h(l3v, northEastSquare[s4c])) return true;
	if (x1h(l3v, northWestSquare[s4c])) return true;
	if (t5m(l3v, knightSquares[s4c])) return true;
	if (a9l(l3v, kingSquares[s4c])) return true;
	return false;
}

function r0f(i0f, s4c)
{
	let r2y = t8x;
	if (p4b(i0f, northEastSquares[s4c], r2y)) return true;
	if (p4b(i0f, southEastSquares[s4c], r2y)) return true;
	if (p4b(i0f, southWestSquares[s4c], r2y)) return true;
	if (p4b(i0f, northWestSquares[s4c], r2y)) return true;
	if (c0o(i0f, northSquares[s4c], r2y)) return true;
	if (i5n(i0f, eastSquares[s4c], r2y)) return true;
	if (c0o(i0f, southSquares[s4c], r2y)) return true;
	if (i5n(i0f, westSquares[s4c], r2y)) return true;
	if (g1i(i0f, southEastSquare[s4c])) return true;
	if (g1i(i0f, southWestSquare[s4c])) return true;
	if (k5f(i0f, knightSquares[s4c], r2y)) return true;
	if (j8k(i0f, kingSquares[s4c], r2y)) return true;
	return false;
}

function r8v(i0f, s4c)
{
	let r2y = t8x;
	if (p3q(i0f, northEastSquares[s4c], r2y)) return true;
	if (p3q(i0f, southEastSquares[s4c], r2y)) return true;
	if (p3q(i0f, southWestSquares[s4c], r2y)) return true;
	if (p3q(i0f, northWestSquares[s4c], r2y)) return true;
	if (b3d(i0f, northSquares[s4c], r2y)) return true;
	if (z1l(i0f, eastSquares[s4c], r2y)) return true;
	if (b3d(i0f, southSquares[s4c], r2y)) return true;
	if (z1l(i0f, westSquares[s4c], r2y)) return true;
	if (k1g(i0f, northEastSquare[s4c])) return true;
	if (k1g(i0f, northWestSquare[s4c])) return true;
	if (z3o(i0f, knightSquares[s4c], r2y)) return true;
	if (f7r(i0f, kingSquares[s4c], r2y)) return true;
	return false;
}

function s2e()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const s4c of l5c)
	{
 		if (y4r(s4c) <= u3q && q4k(s4c) <= b2v)
		{
			let r7v = s4c + r1q;
			northEastSquare.push(r7v);
		}
		else
		{
			northEastSquare.push(t8x);
		}
		if (q4k(s4c) <= b2v)
		{
			let r7v = s4c + x1m;
			eastSquare.push(r7v);
		}
		else
		{
			eastSquare.push(t8x);
		}
		if (y4r(s4c) >= e7l && q4k(s4c) <= b2v)
		{
			let r7v = s4c + n2d;
			southEastSquare.push(r7v);
		}
		else
		{
			southEastSquare.push(t8x);
		}
		if (y4r(s4c) >= e7l && q4k(s4c) >= d4h)
		{
			let r7v = s4c + g9f;
			southWestSquare.push(r7v);
		}
		else
		{
			southWestSquare.push(t8x);
		}
		if (q4k(s4c) >= d4h)
		{
			let r7v = s4c + d4e;
			westSquare.push(r7v);
		}
		else
		{
			westSquare.push(t8x);
		}
		if (y4r(s4c) <= u3q && q4k(s4c) >= d4h)
		{
			let r7v = s4c + q2r;
			northWestSquare.push(r7v);
		}
		else
		{
			northWestSquare.push(t8x);
		}
	}

  for (const s4c of l5c)
	{
  	northSquares.push(x0g(s4c));
		northEastSquares.push(o6q(s4c));
		eastSquares.push(o0u(s4c));
		southEastSquares.push(o3m(s4c));
		southSquares.push(r1k(s4c));
		southWestSquares.push(i2k(s4c));
		westSquares.push(a0f(s4c));
		northWestSquares.push(d4g(s4c));
		kingSquares.push(p4c(s4c));
		knightSquares.push(x0j(s4c));
	}
}

function e8t(i0f)
{
	let t0d = [];

	if (i0f.g4w())
	{
		let a7v = i0f.a7v();
    for (const s4c of l5c)
		{
			if (!a7v) break;
			if (i0f.i2v(s4c))
			{
				switch (i0f.h7c(s4c))
				{
					case t7i.v8p:
						u8s(t0d, i0f, s4c);
						a7v--;
						break;
					case t7i.n7y:
						m7s(t0d, i0f, s4c);
						a7v--;
						break;
					case t7i.p2j:
						q6t(t0d, i0f, s4c);
						a7v--;
						break;
					case t7i.w1f:
						a3z(t0d, i0f, s4c);
						a7v--;
						break;
					case t7i.w6r:
						o4u(t0d, i0f, s4c);
						a7v--;
						break;
					case t7i.q2q:
						f7w(t0d, i0f, s4c);
						a7v--;
						break;
					default:
						break;
				}
			}
		}
		g9n(t0d, i0f);
		q5t(t0d, i0f);
	}
	else
	{
		let s0h = i0f.s0h();
    for (const s4c of l5c)
		{
			if (!s0h) break;
			if (i0f.s5t(s4c))
			{
				switch (i0f.h7c(s4c))
				{
					case t7i.z8f:
						m4f(t0d, i0f, s4c);
						s0h--;
						break;
					case t7i.b2f:
						l2h(t0d, i0f, s4c);
						s0h--;
						break;
					case t7i.f0c:
						e2q(t0d, i0f, s4c);
						s0h--;
						break;
					case t7i.x5l:
						w0j(t0d, i0f, s4c);
						s0h--;
						break;
					case t7i.m0l:
						f8z(t0d, i0f, s4c);
						s0h--;
						break;
					case t7i.c5p:
						d4o(t0d, i0f, s4c);
						s0h--;
						break;
					default:
						break;
				}
			}
		}
		u0j(t0d, i0f);
		l4c(t0d, i0f);
	}

	return t0d;
}

function s4u(i0f, z8c)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.i2v(z8c))
		{
			x8y(t0d, i0f, z8c);
		}
	}
	else
	{
		if (!i0f.s5t(z8c))
		{
			x3o(t0d, i0f, z8c);
		}
	}

	return t0d;
}

function m5t(i0f, z8c)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.i2v(z8c))
		{
			z5i(t0d, i0f, z8c, t7i.n7y);
		}
	}
	else
	{
		if (!i0f.s5t(z8c))
		{
			z5i(t0d, i0f, z8c, t7i.b2f);
		}
	}

	return t0d;
}

function y6b(i0f, z8c)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.i2v(z8c))
		{
			j6n(t0d, i0f, z8c, t7i.p2j);
		}
	}
	else
	{
		if (!i0f.s5t(z8c))
		{
			j6n(t0d, i0f, z8c, t7i.f0c);
		}
	}

	return t0d;
}

function v7v(i0f, z8c)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.i2v(z8c))
		{
			p2w(t0d, i0f, z8c, t7i.w1f);
		}
	}
	else
	{
		if (!i0f.s5t(z8c))
		{
			p2w(t0d, i0f, z8c, t7i.x5l);
		}
	}

	return t0d;
}

function v7h(i0f, z8c)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.i2v(z8c))
		{
			a1j(t0d, i0f, z8c, t7i.w6r);
		}
	}
	else
	{
		if (!i0f.s5t(z8c))
		{
			a1j(t0d, i0f, z8c, t7i.m0l);
		}
	}

	return t0d;
}

function k8u(i0f, z8c)
{
	let t0d = [];

	let o6g = t8x;
	if (i0f.g4w())
	{
		o6g = i0f.q2q();
	}
	else
	{
		o6g = i0f.c5p();
	}

	if (o6g == t8x)
	{
		return t0d;
	}

	if (i0f.g4w())
	{
		f7w(t0d, i0f, o6g);
		q5t(t0d, i0f);
	}
	else
	{
		d4o(t0d, i0f, o6g);
		l4c(t0d, i0f);
	}

	return t0d;
}

function p0j(i0f, z8c)
{
	let t0d = [];

	let o6g = t8x;
	if (i0f.g4w())
	{
		o6g = i0f.q2q();
	}
	else
	{
		o6g = i0f.c5p();
	}

	if (o6g == t8x)
	{
		return t0d;
	}

	if (i0f.g4w())
	{
		if (!i0f.i2v(z8c))
		{
			l0f(t0d, i0f, z8c, t7i.q2q);
		}
	}
	else
	{
		if (!i0f.s5t(z8c))
		{
			l0f(t0d, i0f, z8c, t7i.c5p);
		}
	}

	return t0d;
}

function t7s(i0f)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.x6j(i0f.m6s()))
		{
			return t0d;
		}
		if (!i0f.r1z())
		{
			return t0d;
		}
		v8c(t0d, i0f);
		return t0d;
	}
	else
	{
		if (!i0f.d6d(i0f.a2d()))
		{
			return t0d;
		}
		if (!i0f.c8b())
		{
			return t0d;
		}
		g1f(t0d, i0f);
		return t0d;
	}
}

function n4x(i0f)
{
	let t0d = [];

	if (i0f.g4w())
	{
		if (!i0f.x6j(i0f.m6s()))
		{
			return t0d;
		}
		if (!i0f.b3n())
		{
			return t0d;
		}
		s6f(t0d, i0f);
		return t0d;
	}
	else
	{
		if (!i0f.d6d(i0f.a2d()))
		{
			return t0d;
		}
		if (!i0f.w7q())
		{
			return t0d;
		}
		h9y(t0d, i0f);
		return t0d;
	}
}

function d5o(i0f)
{
	if (i0f.g4w())
	{
		if (i0f.q2q() != t8x)
		{
			return r8v(i0f, i0f.q2q());
		}
	}
	else
	{
		if (i0f.c5p() != t8x)
		{
			return r0f(i0f, i0f.c5p());
		}
	}
	return false;
}




function x4g(i0f, y9f)
{
	let i7d = e8t(i0f);
	let a7m = [];
  for (const r8w of i7d)
	{
		if (r8w.y9f == y9f)
		{
			a7m.push(r8w);
		}
	}
	return a7m;
}

function m0a(i0f, r7v)
{
	let i7d = e8t(i0f);
	let z4o = [];
  for (const r8w of i7d)
	{
		if (r8w.r7v == r7v)
		{
			z4o.push(r8w);
		}
	}
	return z4o;
}

function d8e(i0f, y9f, r7v)
{
	let i7d = e8t(i0f);
	let g6y = [];
  for (const r8w of i7d)
	{
		if (r8w.y9f == y9f && r8w.r7v == r7v)
		{
			g6y.push(r8w);
		}
	}
	return g6y;
}

function x2w(i0f, y9f, r7v, type)
{
	let h9q = new t7f();
	if (type == b1w.null)
	{
		return h9q;
	}

	h9q.y9f = y9f;
	h9q.r7v = r7v;
	h9q.type = type;
	if (type == b1w.w2t)
	{
		if (i0f.h7c(h9q.r7v) != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = i0f.h7c(h9q.r7v);
		}
		h9q.v6x = i0f.h7c(h9q.y9f);
		h9q.o8r = h9q.v6x;
	}
	else if (type == b1w.z9d)
	{
		h9q.v6x = i0f.h7c(h9q.y9f);
		h9q.o8r = h9q.v6x;
	}
	else if (type == b1w.p5v)
	{
		h9q.v6x = i0f.h7c(h9q.y9f);
		h9q.o8r = h9q.v6x;
		if (i2v(h9q.v6x))
		{
			h9q.q9w = (h9q.r7v - 8);
			h9q.n6v = t7i.z8f;
		}
		else
		{
			h9q.q9w = (h9q.r7v + 8);
			h9q.n6v = t7i.v8p;
		}
	}
	else if (type == b1w.p9y)
	{
		if (i0f.h7c(h9q.r7v) != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = i0f.h7c(h9q.r7v);
		}
		h9q.v6x = i0f.h7c(h9q.y9f);
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.w6r;
		}
		else
		{
			h9q.o8r = t7i.m0l;
		}
	}
	else if (type == b1w.o4e)
	{
		if (i0f.h7c(h9q.r7v) != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = i0f.h7c(h9q.r7v);
		}
		h9q.v6x = i0f.h7c(h9q.y9f);
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.w1f;
		}
		else
		{
			h9q.o8r = t7i.x5l;
		}
	}
	else if (type == b1w.r1d)
	{
		if (i0f.h7c(h9q.r7v) != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = i0f.h7c(h9q.r7v);
		}
		h9q.v6x = i0f.h7c(h9q.y9f);
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.p2j;
		}
		else
		{
			h9q.o8r = t7i.f0c;
		}
	}
	else if (type == b1w.j4j)
	{
		if (i0f.h7c(h9q.r7v) != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = i0f.h7c(h9q.r7v);
		}
		h9q.v6x = i0f.h7c(h9q.y9f);
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.n7y;
		}
		else
		{
			h9q.o8r = t7i.b2f;
		}
	}
	return h9q;
}

function x2w(l3v, y9f, r7v, type)
{
	let h9q = new t7f();
	if (type == b1w.null)
	{
		return h9q;
	}

	h9q.y9f = y9f;
	h9q.r7v = r7v;
	h9q.type = type;
	if (type == b1w.w2t)
	{
		if (l3v[h9q.r7v] != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = l3v[h9q.r7v];
		}
		h9q.v6x = l3v[h9q.y9f];
		h9q.o8r = h9q.v6x;
	}
	else if (type == b1w.z9d)
	{
		h9q.v6x = l3v[h9q.y9f];
		h9q.o8r = h9q.v6x;
	}
	else if (type == b1w.p5v)
	{
		h9q.v6x = l3v[h9q.y9f];
		h9q.o8r = h9q.v6x;
		if (i2v(h9q.v6x))
		{
			h9q.q9w = (h9q.r7v - 8);
			h9q.n6v = t7i.z8f;
		}
		else
		{
			h9q.q9w = (h9q.r7v + 8);
			h9q.n6v = t7i.v8p;
		}
	}
	else if (type == b1w.p9y)
	{
		if (l3v[h9q.r7v] != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = l3v[h9q.r7v];
		}
		h9q.v6x = l3v[h9q.y9f];
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.w6r;
		}
		else
		{
			h9q.o8r = t7i.m0l;
		}
	}
	else if (type == b1w.o4e)
	{
		if (l3v[h9q.r7v] != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = l3v[h9q.r7v];
		}
		h9q.v6x = l3v[h9q.y9f];
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.w1f;
		}
		else
		{
			h9q.o8r = t7i.x5l;
		}
	}
	else if (type == b1w.r1d)
	{
		if (l3v[h9q.r7v] != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = l3v[h9q.r7v];
		}
		h9q.v6x = l3v[h9q.y9f];
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.p2j;
		}
		else
		{
			h9q.o8r = t7i.f0c;
		}
	}
	else if (type == b1w.j4j)
	{
		if (l3v[h9q.r7v] != t7i.y5h)
		{
			h9q.q9w = h9q.r7v;
			h9q.n6v = l3v[h9q.r7v];
		}
		h9q.v6x = l3v[h9q.y9f];
		if (i2v(h9q.v6x))
		{
			h9q.o8r = t7i.n7y;
		}
		else
		{
			h9q.o8r = t7i.b2f;
		}
	}
	return h9q;
}

const t4t 						=   8; 
const y7g 						=  -8; 
const x1m 	      			=   1; 
const d4e 	      			=  -1; 
const x4m 		=  17; 
const f5p 		=  10; 
const r1q 				=   9; 
const r8q 		=   6; 
const x0o 		=  15; 
const q2r 				=   7; 
const k6c 		= -17; 
const i6c 		= -10; 
const g9f 				=  -9; 
const m6o 		=  -6; 
const z6f 		= -15; 
const n2d 				=  -7; 

function x0g(s4c)
{
	let p0w = [];
	let b6d = t4t;
	let r7v = s4c;
	while (y4r(r7v) <= u3q)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function o6q(s4c)
{
	let p0w = [];
	let b6d = r1q;
	let r7v = s4c;
	while (y4r(r7v) <= u3q && q4k(r7v) <= b2v)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function o0u(s4c)
{
	let p0w = [];
	let b6d = x1m;
	let r7v = s4c;
	while (q4k(r7v) <= b2v)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function o3m(s4c)
{
	let p0w = [];
	let b6d = n2d;
	let r7v = s4c;
	while (y4r(r7v) >= e7l && q4k(r7v) <= b2v)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function r1k(s4c)
{
	let p0w = [];
	let b6d = y7g;
	let r7v = s4c;
	while (y4r(r7v) >= e7l)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function i2k(s4c)
{
	let p0w = [];
	let b6d = g9f;
	let r7v = s4c;
	while (y4r(r7v) >= e7l && q4k(r7v) >= d4h)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function a0f(s4c)
{
	let p0w = [];
	let b6d = d4e;
	let r7v = s4c;
	while (q4k(r7v) >= d4h)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function d4g(s4c)
{
	let p0w = [];
	let b6d = q2r;
	let r7v = s4c;
	while (y4r(r7v) <= u3q && q4k(r7v) >= d4h)
	{
		r7v = r7v + b6d;
		p0w.push(r7v);
	}
	return p0w;
}

function x0j(s4c)
{
	let p0w = [];
	if (y4r(s4c) <= m5j && q4k(s4c) <= b2v)
	{
		let r7v = s4c + x4m;
		p0w.push(r7v);
	}
	if (y4r(s4c) <= u3q && q4k(s4c) <= u1x)
	{
		let r7v = s4c + f5p;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= e7l && q4k(s4c) <= u1x)
	{
		let r7v = s4c + m6o;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= z0p && q4k(s4c) <= b2v)
	{
		let r7v = s4c + z6f;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= z0p && q4k(s4c) >= d4h)
	{
		let r7v = s4c + k6c;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= e7l && q4k(s4c) >= t0q)
	{
		let r7v = s4c + i6c;
		p0w.push(r7v);
	}
	if (y4r(s4c) <= u3q && q4k(s4c) >= t0q)
	{
		r7v = s4c + r8q;
		p0w.push(r7v);
	}
	if (y4r(s4c) <= m5j && q4k(s4c) >= d4h)
	{
		let r7v = s4c + x0o;
		p0w.push(r7v);
	}
	return p0w;
}

function p4c(s4c)
{
	let p0w = [];
	if (y4r(s4c) <= u3q)
	{
		let r7v = s4c + t4t;
		p0w.push(r7v);
	}
	if (y4r(s4c) <= u3q && q4k(s4c) <= b2v)
	{
		let r7v = s4c + r1q;
		p0w.push(r7v);
	}
	if (q4k(s4c) <= b2v)
	{
		let r7v = s4c + x1m;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= e7l && q4k(s4c) <= b2v)
	{
		let r7v = s4c + n2d;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= e7l)
	{
		let r7v = s4c + y7g;
		p0w.push(r7v);
	}
	if (y4r(s4c) >= e7l && q4k(s4c) >= d4h)
	{
		let r7v = s4c + g9f;
		p0w.push(r7v);
	}
	if (q4k(s4c) >= d4h)
	{
		let r7v = s4c + d4e;
		p0w.push(r7v);
	}
	if (y4r(s4c) <= u3q && q4k(s4c) >= d4h)
	{
		let r7v = s4c + q2r;
		p0w.push(r7v);
	}
	return p0w;
}

const b1w =
{
  m7l : 0,  
	w2t : 1,
	z9d : 2,
	p5v : 3,
	j4j : 4,
	r1d : 5,
	o4e : 6,
	p9y : 7
};

function a8p(n2f)
{
	switch (n2f)
	{
		case t7i.v8p:
		case t7i.z8f:
			return v0t.c0x;
		case t7i.n7y:
		case t7i.b2f:
			return v0t.h9b;
		case t7i.p2j:
		case t7i.f0c:
			return v0t.h5c;
		case t7i.w1f:
		case t7i.x5l:
			return v0t.x2t;
		case t7i.w6r:
		case t7i.m0l:
			return v0t.v0a;
		case t7i.q2q:
		case t7i.c5p:
			return v0t.king;
		case t7i.y5h:
			return v0t.c0x;
	}
}

function m9w(i0f, h9q, k2r)
{
 	let c3l = '';
	if (h9q.y5h())
	{
		c3l += "--";
	}
	else if (c3o(h9q.v6x))
	{
    if (h9q.m9o())
    {
			let r9w = q4k(h9q.y9f);
			c3l = m3g(r9w) + "x" + r1s(h9q.r7v);
    }
    else
    {
 			c3l = r1s(h9q.r7v);
    }
		if (h9q.d5c())
		{
			c3l += "=";
			c3l += x9c(a8p(h9q.o8r));
		}
	}
	else if (h9q.v6x == t7i.q2q && h9q.n9u())
	{
		if (h9q.r7v == p0k)
		{
			c3l = "O-O-O";
		}
		else
		{
			c3l = "O-O";
		}
	}
	else if (h9q.v6x == t7i.c5p && h9q.n9u())
	{
		if (h9q.r7v == j0r)
		{
			c3l = "O-O-O";
		}
		else
		{
			c3l = "O-O";
		}
	}
	else
	{
		c3l = x9c(a8p(h9q.v6x));
    let i7d = [];
    if (i2v(h9q.v6x))
    {
      if (h9q.v6x == t7i.n7y)
      {
        i7d = m5t(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.p2j)
      {
        i7d = y6b(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.w1f)
      {
        i7d = v7v(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.w6r)
      {
        i7d = v7h(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.q2q)
      {
        i7d = p0j(i0f, h9q.r7v);
      }
    }
    else
    {
      if (h9q.v6x == t7i.b2f)
      {
        i7d = m5t(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.f0c)
      {
        i7d = y6b(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.x5l)
      {
        i7d = v7v(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.m0l)
      {
        i7d = v7h(i0f, h9q.r7v);
      }
      else if (h9q.v6x == t7i.c5p)
      {
        i7d = p0j(i0f, h9q.r7v);
      }
    }
    if (i7d.length > 1)
    {
      
      let l5z = 0;
      let r9w = q4k(h9q.y9f);
     	for (const r8w of i7d)
      {
        if (q4k(r8w.y9f) == r9w)
        {
          l5z++;
        }
      }
      if (l5z == 1)
      {
        
 				let r9w = q4k(h9q.y9f);
				c3l += m3g(r9w);
      }
      else
      {
        l5z = 0;
        let j6s = y4r(h9q.y9f);
       	for (const r8w of i7d)
        {
          if (y4r(r8w.y9f) == j6s)
          {
            l5z++;
          }
        }
        if (l5z == 1)
        {
          
          c3l += q7m(j6s);
        }
        else
        {
          
 					c3l += r1s(h9q.y9f);
        }
      }
    }
		if (h9q.m9o())
		{
       c3l += "x";
		}
		c3l += r1s(h9q.r7v);
	}
	if (!h9q.y5h())
	{
  	let r0g = i0f.p7u();
    r0g.w8y(h9q);
  	if (d5o(r0g))
	  {
  		let t0d = e8t(r0g);
	  	if (t0d.length == 0)
		  {
			  c3l += "#";
  		}
	  	else
		  {
			  c3l += "+";
  		}
	  }
	}
	return c3l;
}
class v4n
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function s5q(j7s,
  g5z,
  i9v,
  coordinate,
  coordinatesType,
  u9r,
  y2u,
  marginSize) 
{
 	let w5s = (coordinatesType == t8s.d2s ||
		coordinatesType == t8s.u5c ||
		coordinatesType == t8s.v2s);
	let h2h = (coordinatesType == t8s.d2s ||
		coordinatesType == t8s.u5c ||
		coordinatesType == t8s.m7x);
	let j8e =	(coordinatesType == t8s.d2s ||
		coordinatesType == t8s.v2s ||
		coordinatesType == t8s.i8z);
	let x6e = (coordinatesType == t8s.d2s ||
		coordinatesType == t8s.m7x ||
		coordinatesType == t8s.i8z);

	j7s.font = (coordinate.fontSize).toString() + "px serif";
	j7s.fillStyle = u9r;
  let d7o = coordinate.height;

	if (h2h)
	{
		let s8j = h5v;
		if (y2u)
		{
			s8j = 1;
		}
    for (let g0t = 0; g0t < h5v; g0t++)
		{
			let s6g = j7s.measureText(s8j).width;
			let top = g5z.a6s + 1 + g0t * i9v.q6p;
			top += (i9v.q6p - d7o) / 2 + d7o;
			let z4s = g5z.p4k - marginSize + (marginSize - s6g) / 2;
      j7s.fillText(s8j, z4s, top);
			if (y2u)
			{
				s8j++;
			}
			else
			{
				s8j--;
			}
		}
	}

	if (j8e)
	{
		let s8j = h5v;
		if (y2u)
		{
			s8j = 1;
		}
    for (let g0t = 0; g0t < h5v; g0t++)
		{
      let s6g = j7s.measureText(s8j).width;
			let top = g5z.a6s + 1 + g0t * i9v.q6p;
			top += (i9v.q6p - d7o) / 2 + d7o;
			let z4s = g5z.p4k + g5z.y7s() +
        (marginSize - s6g) / 2;
      j7s.fillText(s8j, z4s, top);
			if (y2u)
			{
				s8j++;
			}
			else
			{
				s8j--;
			}
		}
	}

	if (w5s)
	{
		let m0w = 'a';
		if (y2u)
		{
			m0w = 'h';
		}
    for (let b3f = 0; b3f < h5v; b3f++)
		{
			let j2f = m0w;
			let left = g5z.p4k + 1 + b3f * i9v.q6p;
      let s6g = j7s.measureText(j2f).width;
			let z4s = left + (i9v.q6p - s6g) / 2;
			let q1i = g5z.a6s - (marginSize - d7o) / 2 - 2;
      
      if (m0w == 'g')
      {
        q1i -= 2; 
      }
      j7s.fillText(j2f, z4s, q1i);
			if (y2u)
			{
        let j8i = m0w.charCodeAt(0);
        j8i--;
        m0w = String.fromCharCode(j8i);
			}
			else
			{
        let j8i = m0w.charCodeAt(0);
        j8i++;
        m0w = String.fromCharCode(j8i);
			}
		}
	}

	if (x6e)
	{
		let m0w = 'a';
		if (y2u)
		{
			m0w = 'h';
		}
    for (let b3f = 0; b3f < h5v; b3f++)
		{
			let j2f = m0w;
			let left = g5z.p4k + 1 + b3f * i9v.q6p;
      let s6g = j7s.measureText(j2f).width;
			let z4s = left + (i9v.q6p - s6g) / 2;
			let q1i = g5z.a6s + g5z.h7w() +
        (marginSize - d7o) / 2 + d7o - 2;
      
      if (m0w == 'g')
      {
        q1i -= 2; 
      }
      j7s.fillText(j2f, z4s, q1i);
			if (y2u)
			{
        let j8i = m0w.charCodeAt(0);
        j8i--;
        m0w = String.fromCharCode(j8i);
			}
			else
			{
        let j8i = m0w.charCodeAt(0);
        j8i++;
        m0w = String.fromCharCode(j8i);
			}
		}
	}
}

function m7b(j7s, fontSize)
{
	let p2h = new v4n();
	p2h.fontSize = fontSize;
	p2h.height = fontSize;
	p2h.width = fontSize;
	return p2h;
}
var whitePawnBitmap = null;
var whiteKnightBitmap = null;
var whiteBishopBitmap = null;
var whiteRookBitmap = null;
var whiteQueenBitmap = null;
var whiteKingBitmap = null;
var blackPawnBitmap = null;
var blackKnightBitmap = null;
var blackBishopBitmap = null;
var blackRookBitmap = null;
var blackQueenBitmap = null;
var blackKingBitmap = null;
var pieceBitmapsInitialized = false;

function d9a()
{
  whitePawnBitmap = n0f.f1w("images/pieces/Merida/wP");
 	whiteKnightBitmap = n0f.f1w("images/pieces/Merida/wN");
  whiteBishopBitmap = n0f.f1w("images/pieces/Merida/wB");
 	whiteRookBitmap = n0f.f1w("images/pieces/Merida/wR");
  whiteQueenBitmap = n0f.f1w("images/pieces/Merida/wQ");
 	whiteKingBitmap = n0f.f1w("images/pieces/Merida/wK");
  blackPawnBitmap = n0f.f1w("images/pieces/Merida/bP");
 	blackKnightBitmap = n0f.f1w("images/pieces/Merida/bN");
  blackBishopBitmap = n0f.f1w("images/pieces/Merida/bB");
 	blackRookBitmap = n0f.f1w("images/pieces/Merida/bR");
  blackQueenBitmap = n0f.f1w("images/pieces/Merida/bQ");
 	blackKingBitmap = n0f.f1w("images/pieces/Merida/bK");
}

function g0p()
{
  whitePawnBitmap = n0f.f1w("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = n0f.f1w("images/pieces/CBurnett/wN");
  whiteBishopBitmap = n0f.f1w("images/pieces/CBurnett/wB");
 	whiteRookBitmap = n0f.f1w("images/pieces/CBurnett/wR");
  whiteQueenBitmap = n0f.f1w("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = n0f.f1w("images/pieces/CBurnett/wK");
  blackPawnBitmap = n0f.f1w("images/pieces/CBurnett/bP");
 	blackKnightBitmap = n0f.f1w("images/pieces/CBurnett/bN");
  blackBishopBitmap = n0f.f1w("images/pieces/CBurnett/bB");
 	blackRookBitmap = n0f.f1w("images/pieces/CBurnett/bR");
  blackQueenBitmap = n0f.f1w("images/pieces/CBurnett/bQ");
 	blackKingBitmap = n0f.f1w("images/pieces/CBurnett/bK");
}

function k1o(g4z)
{
  if (g4z == 0)
  {
    g0p();
  }
  else
  {
    d9a();
  }
}

function m6r(n2f)
{
  switch (n2f)
	{
    case t7i.v8p:
      return whitePawnBitmap;
      break;
    case t7i.n7y:
      return whiteKnightBitmap;
      break;
    case t7i.p2j:
      return whiteBishopBitmap;
      break;
    case t7i.w1f:
      return whiteRookBitmap;
      break;
    case t7i.w6r:
      return whiteQueenBitmap;
      break;
    case t7i.q2q:
      return whiteKingBitmap;
      break;
    case t7i.z8f:
      return blackPawnBitmap;
      break;
    case t7i.b2f:
      return blackKnightBitmap;
      break;
    case t7i.f0c:
      return blackBishopBitmap;
      break;
    case t7i.x5l:
      return blackRookBitmap;
      break;
    case t7i.m0l:
      return blackQueenBitmap;
      break;
    case t7i.c5p:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function e9s(j7s, rect, n2f)
{
  if (n2f == t7i.y5h) return;
	let f1w = m6r(n2f);
  j7s.drawImage(f1w, rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
}
function j9k(i7l)
{
	let i0f = new x3i();
	let a1i = i7l.length;

 	let b3m = i7l.split(" ");
	if (b3m.length < 2)
	{
		return i0f;
	}

	let o1b = b3m[1];
	if (o1b.length)
	{
		if (o1b[0] == 'w')
		{
			i0f.b2d();
		}
		else if (o1b[0] == 'b')
		{
			i0f.t9w();
		}
	}

 	let a4h = b3m[0].split("/");
	if (a4h.length != 8)
	{
		return i0f;
	}
	let f4n = a8;
	for (const g0t of a4h)
	{
		let s4c = f4n;
		let a1i = g0t.length;
		for (let i = 0; i < a1i; i++)
		{
			if (s4c == f4n + 8)
			{
				return i0f; 
			}
			let k3f = true;
			switch (g0t[i])
			{
				case 'p':
					i0f.r5l(s4c, t7i.z8f);
					break;
				case 'n':
					i0f.r5l(s4c, t7i.b2f);
					break;
				case 'b':
					i0f.r5l(s4c, t7i.f0c);
					break;
				case 'r':
					i0f.r5l(s4c, t7i.x5l);
					break;
				case 'q':
					i0f.r5l(s4c, t7i.m0l);
					break;
				case 'k':
					i0f.r5l(s4c, t7i.c5p);
					break;
				case 'P':
					i0f.r5l(s4c, t7i.v8p);
					break;
				case 'N':
					i0f.r5l(s4c, t7i.n7y);
					break;
				case 'B':
					i0f.r5l(s4c, t7i.p2j);
					break;
				case 'R':
					i0f.r5l(s4c, t7i.w1f);
					break;
				case 'Q':
					i0f.r5l(s4c, t7i.w6r);
					break;
				case 'K':
					i0f.r5l(s4c, t7i.q2q);
					break;
				default:
					k3f = false;
					break;
			}
			if (k3f)
			{
				s4c = s4c + 1;
			}
			else
			{
				if (!isNaN(g0t[i]))
				{
					s4c = s4c + q8h(g0t[i], 0);
				}
			}
		}
		f4n = f4n - 8;
	}

 	if (b3m.length >= 3)
	{
		let b8o = new b0t(); 
		let r9l = b3m[2];
		if (r9l.length)
		{
			if (r9l[0] != '-')
			{
				let a1i = r9l.length;
				if (r9l[0] >= 'A' && r9l[0] <= 'H')
				{
 					b8o.i3i = true; 
          
					b8o.m6s = i0f.q2q();
					b8o.a2d = i0f.c5p();
					if (a1i == 4)
					{
						let c3l = r9l.charAt(0).toLowerCase();
						c3l += "1";
						b8o.k9b = t5v(c3l);
						if (i0f.o0o(b8o.k9b))
						{
							b8o.c5v = true;
						}
						c3l = r9l.charAt(1).toLowerCase();
						c3l += "1";
						b8o.q5b = t5v(c3l);
						if (i0f.o0o(b8o.q5b))
						{
							b8o.y4g = true;
						}
						c3l = r9l.charAt(2).toLowerCase();
						c3l += "8";
						b8o.n9v = t5v(c3l);
						if (i0f.h8a(b8o.n9v))
						{
							b8o.t8v = true;
						}
						c3l = r9l.charAt(3).toLowerCase();
						c3l += "8";
						b8o.v6w = t5v(c3l);
						if (i0f.h8a(b8o.v6w))
						{
							b8o.e5v = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < a1i; i++)
					{
						switch (r9l[i])
						{
							case 'K':
								if (i0f.x6j(b8o.m6s) && i0f.o0o(b8o.k9b))
								{
									b8o.c5v = true;
								}
								break;
							case 'Q':
								if (i0f.x6j(b8o.m6s) && i0f.o0o(b8o.q5b))
								{
									b8o.y4g = true;
								}
								break;
							case 'k':
								if (i0f.d6d(b8o.a2d) && i0f.h8a(b8o.n9v))
								{
									b8o.t8v = true;
								}
								break;
							case 'q':
								if (i0f.d6d(b8o.a2d) && i0f.h8a(b8o.v6w))
								{
									b8o.e5v = true;
								}
								break;
						}
					}
				}
			}
		}
		if (b3m.length >= 4)
		{
			let w7n = b3m[3];
			if (w7n.length)
			{
				if (w7n[0] != '-')
				{
					b8o.j0e = t5v(w7n);
					if (y4r(b8o.j0e) == m5j)
					{
						let i8l = b8o.j0e + 8;
						let z8c = b8o.j0e - 8;
						if (!i0f.c2z(i8l) || !i0f.e7q(z8c))
						{
							b8o.j0e = t8x;
						}
					}
					else if (y4r(b8o.j0e) == z0p)
					{
						let i8l = b8o.j0e - 8;
						let z8c = b8o.j0e + 8;
						if (!i0f.c2z(i8l) || !i0f.y7o(z8c))
						{
							b8o.j0e = t8x;
						}
					}
					else
					{
						b8o.j0e = t8x;
					}
				}
			}
		}
		i0f.p4a(b8o);
	}
	return i0f;
}

function y8p(i0f)
{
	let i7l = '';
	let f4n = a8;
	for (let g0t = 7; g0t >= 0; g0t--)
	{
		let s4c = f4n;
		let n2h = 0;
		for (let b3f = 0; b3f < 8; b3f++)
		{
			if (i0f.c2z(s4c))
			{
				n2h++;
			}
			else
			{
				if (n2h)
				{
					i7l += n2h;
					n2h = 0;
				}
				switch (i0f.h7c(s4c))
				{
					case t7i.y5h:
						break;
					case t7i.v8p:
						i7l += 'P';
						break;
					case t7i.n7y:
						i7l += 'N';
						break;
					case t7i.p2j:
						i7l += 'B';
						break;
					case t7i.w1f:
						i7l += 'R';
						break;
					case t7i.w6r:
						i7l += 'Q';
						break;
					case t7i.q2q:
						i7l += 'K';
						break;
					case t7i.z8f:
						i7l += 'p';
						break;
					case t7i.b2f:
						i7l += 'n';
						break;
					case t7i.f0c:
						i7l += 'b';
						break;
					case t7i.x5l:
						i7l += 'r';
						break;
					case t7i.m0l:
						i7l += 'q';
						break;
					case t7i.c5p:
						i7l += 'k';
						break;
				}
			}
			s4c = s4c + 1;
		}
		if (n2h)
		{
			i7l += n2h;
		}
		f4n = (f4n - 8);
		if (g0t > 0)
		{
			i7l += "/";
		}
	}
	i7l += " ";
	if (i0f.g4w())
	{
		i7l += "w";
	}
	else
	{
		i7l += "b";
	}
	i7l += " ";
	let b8o = i0f.o8q();
	if (
		!b8o.c5v &&
		!b8o.y4g &&
		!b8o.t8v &&
		!b8o.e5v)
	{
		i7l += "-";
	}
	else
	{
		if (b8o.i3i)
		{
			if (b8o.c5v)
			{
				i7l += m3g(q4k(b8o.k9b)).toUpperCase();
			}
			if (b8o.y4g)
			{
				i7l += m3g(q4k(b8o.q5b)).toUpperCase();
			}
			if (b8o.t8v)
			{
				i7l += m3g(q4k(b8o.n9v)).toUpperCase();
			}
			if (b8o.e5v)
			{
				i7l += m3g(q4k(b8o.v6w)).toUpperCase();
			}
		}
		else
		{
			if (b8o.c5v)
			{
				i7l += "K";
			}
			if (b8o.y4g)
			{
				i7l += "Q";
			}
			if (b8o.t8v)
			{
				i7l += "k";
			}
			if (b8o.e5v)
			{
				i7l += "q";
			}
		}
	}
	i7l += " ";
	if (b8o.j0e == t8x)
	{
		i7l += "-";
	}
	else
	{
		i7l += r1s(b8o.j0e);
	}
	return i7l;
}

function d0x(i0f, m5p)
{
	
	

  let j5v = m5p.length;
	if (j5v < 2 || j5v > 7)
	{
		return false;
	}

	
	if (m5p[0] == 'Z' || (j5v == 2 && m5p == "--") || (j5v == 4 && m5p == "null"))
	{
		return new t7f();
	}

	
	let l2f = m5p[j5v-1];
	if (l2f == '+' || l2f == '#')
	{
		j5v--;
		if (j5v < 2)
		{
   		return false;
		}
	}

	
	if (m5p[0] == 'O' || m5p[0] == '0')
	{
		if (j5v == 3)
		{
			let i7d = n4x(i0f);
			if (i7d.length != 1)
			{
    		return false;
			}
			return i7d[0];
		}
		if (j5v == 5)
		{
			let i7d = t7s(i0f);
			if (i7d.length != 1)
			{
    		return false;
			}
			return i7d[0];
		}
 		return false;
	}

	
	let g4a = false;
	let e4u = t7i.y5h;
	if (m5p[j5v-2] == '=')
	{
		g4a = true;
		let z3m = m5p[j5v-1];
		if (z3m == 'N')
		{
			e4u = i0f.g4w() ? t7i.n7y : t7i.b2f;
		}
		else if (z3m == 'B')
		{
			e4u = i0f.g4w() ? t7i.p2j : t7i.f0c;
		}
		else if (z3m == 'R')
		{
			e4u = i0f.g4w() ? t7i.w1f : t7i.x5l;
		}
		else if (z3m == 'Q')
		{
			e4u = i0f.g4w() ? t7i.w6r : t7i.m0l;
		}
		else
		{
  		return false;
		}
		j5v -= 2;
		if (j5v < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += m5p[j5v-2];
	toString += m5p[j5v-1];
	let z8c = t5v(toString);
	if (z8c == t8x)
	{
		return false;
	}
	j5v -= 2;
	

 	if (g4a)
	{
		let i7d = s4u(i0f, z8c);
		if (i7d.length == 0)
		{
  		return false;
		}
		let b1o = [];
		for (const h9q of i7d)
		{
			if (h9q.o8r == e4u)
			{
				b1o.push(h9q);
			}
		}
		i7d = b1o;
		if (i7d.length == 1)
		{
			return i7d[0];
		}
		if (j5v == 0)
		{
			
			for (const r8w of i7d)
			{
				if (r8w.q9w == t8x)
				{
					return r8w;
				}
			}
  		return false;
		}
		if (j5v != 2)
		{
  		return false;
		}
		
		let l2f = m5p[0];
		if (l2f < 'a' || l2f > 'h')
		{
  		return false;
		}
		let r9w = l1q(l2f);
		for (const r8w of i7d)
		{
			if (q4k(r8w.y9f) == r9w)
			{
				return r8w;
			}
		}
		return false;
	}

	if (j5v == 0)
	{
  	
		let i7d = s4u(i0f, z8c);
		if (i7d.length != 1)
		{
  		return false;
		}
		return i7d[0];
	}

  
	let c0x = false;
	let i7d = [];
	let x3a = m5p[0];
	if (x3a == 'N')
	{
		i7d = m5t(i0f, z8c);
	}
	else if (x3a == 'B')
	{
		i7d = y6b(i0f, z8c);
	}
	else if (x3a == 'R')
	{
		i7d = v7v(i0f, z8c);
	}
	else if (x3a == 'Q')
	{
		i7d = v7h(i0f, z8c);
	}
	else if (x3a == 'K')
	{
		
		i7d = p0j(i0f, z8c);
	}
	else
	{
		c0x = true;
		i7d = s4u(i0f, z8c);
	}
	if (i7d.length == 0)
	{
		return false;
	}
	if (i7d.length == 1)
	{
		return i7d[0]; 
	}

	
	
	
	if (j5v < 2)
	{
		return false;
	}

 	if (c0x)
	{
		let l2f = m5p[0]; 
		if (l2f < 'a' || l2f > 'h')
		{
  	  return false;
		}
		let r9w = l1q(l2f);
		for (const r8w of i7d)
		{
			if (q4k(r8w.y9f) == r9w && r8w.q9w != t8x)
			{
				return r8w;
			}
		}
		return false;
	}

	

 	
	let w2i = false;
	if (m5p[j5v-1] == 'x')
	{
		w2i = true;
		j5v--;
	}
	else if (m5p[j5v-1] == '-') 
	{
		w2i = false;
		j5v--;
	}

	if (j5v < 2)
	{
		return false;
	}

 	if (j5v == 2)
	{
		
		let l2f = m5p[1]; 
		if (l2f >= 'a' && l2f <= 'h')
		{
			let r9w = l1q(l2f);
			let e7c  = 0;
      let y4k = null;
			for (const r8w of i7d)
			{
				if (q4k(r8w.y9f) == r9w)
				{
					y4k = r8w;
					e7c++;
				}
			}
      return e7c === 1 ? y4k : false;
		}
		if (l2f >= '1' && l2f <= '8')
		{
			let j6s = p6l(l2f);
			let e7c = 0;
      let y4k = null;
			for (const r8w of i7d)
			{
				if (y4r(r8w.y9f) == j6s)
				{
					y4k = r8w;
					e7c++;
				}
			}
      return e7c === 1 ? y4k : false;
		}
		return false;
	}

 	if (j5v == 3)
	{
		
		let z6q = '';
		z6q += m5p[1]; 
		z6q += m5p[2];
		let i8l = t5v(z6q);
		if (i8l == t8x)
		{
  		return false;
		}
		let e7c = 0;
    let y4k = null;
		for (const r8w of i7d)
		{
			if (r8w.y9f == i8l)
			{
				y4k = r8w;
				e7c++;
			}
		}
    return e7c === 1 ? y4k : false;
	}

	return false;
}

function l4o()
{
  let f6l = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png",
    "images/pieces/Merida/bB.svg",
    "images/pieces/Merida/bK.svg",
    "images/pieces/Merida/bN.svg",
    "images/pieces/Merida/bP.svg",
    "images/pieces/Merida/bQ.svg",
    "images/pieces/Merida/bR.svg",
    "images/pieces/Merida/wB.svg",
    "images/pieces/Merida/wK.svg",
    "images/pieces/Merida/wN.svg",
    "images/pieces/Merida/wP.svg",
    "images/pieces/Merida/wQ.svg",
    "images/pieces/Merida/wR.svg",
    "images/pieces/CBurnett/bB.svg",
    "images/pieces/CBurnett/bK.svg",
    "images/pieces/CBurnett/bN.svg",
    "images/pieces/CBurnett/bP.svg",
    "images/pieces/CBurnett/bQ.svg",
    "images/pieces/CBurnett/bR.svg",
    "images/pieces/CBurnett/wB.svg",
    "images/pieces/CBurnett/wK.svg",
    "images/pieces/CBurnett/wN.svg",
    "images/pieces/CBurnett/wP.svg",
    "images/pieces/CBurnett/wQ.svg",
    "images/pieces/CBurnett/wR.svg"];
  return f6l;
}
function div(f8h, z0o)
{
  const u7y = f8h % z0o;
  const quot = Math.floor((f8h - u7y) / z0o);
  return { quot: quot, u7y: u7y };
}

function c9y(i0f, c3l)
{
	let h9q = new t7f();
	if (c3l.length < 4)
	{
		return h9q;
	}
	let z6q = c3l.slice(0, 2);
	let toString = c3l.slice(2, 4);
	h9q.y9f = t5v(z6q);
  h9q.v6x = i0f.h7c(h9q.y9f);
	h9q.r7v = t5v(toString);
	h9q.o8r = h9q.v6x;
	if (c3l.length == 5)
	{
		switch (c3l[4])
		{
			case 'q':
				h9q.o8r = i0f.g4w() ? t7i.w6r : t7i.m0l;
				break;
			case 'r':
				h9q.o8r = i0f.g4w() ? t7i.w1f : t7i.x5l;
				break;
			case 'b':
				h9q.o8r = i0f.g4w() ? t7i.p2j : t7i.f0c;
				break;
			case 'n':
				h9q.o8r = i0f.g4w() ? t7i.n7y : t7i.b2f;
				break;
		}
	}
	return h9q;
}

class u7h
{

constructor()
{
	let g2o = '';
	let value = '';
}

}

function h6u(c3l, g2o, y3q)
{
  let h6s = " " + g2o + " ";
  let n3c = c3l.indexOf(h6s, 0);
	if (n3c >= 0)
	{
		let j4s = n3c + h6s.length;
		let a3d = 0;
		
		if (g2o == "pv")
		{
			a3d = c3l.indexOf(" string ", j4s);
		}
		else
		{
			a3d = c3l.indexOf(" ", j4s);
		}
		if (a3d < 0)
		{
			a3d = c3l.length;
		}
    let value = c3l.slice(j4s, a3d).trim();
		y3q.set(g2o, value);
	}
}

const u9h =
{
	o7z        : 0,
	g0r      : 1,
};

class Engine
{

constructor()
{
	this.n9z = new w0v();
  this.q3t = null;
  this.i5z = new b1g();
  this.u0a = new c1p();
  this.o8u = false;
  this.k3c = false;
  this.r4y = false;
  this.g3t = false;
  this.h7i = false;
  this.n2x = new j0s();
	this.n9s = new a1a();
  this.x3j = null;
}

w0p(j5u)
{
  this.n9z = j5u.p7u();
  this.j8x();
  this.o8u = false;
 	for (const n7o of this.n9z.e3m.e3m)
	{
		if (n7o.g2o == "MultiPV")
		{
			this.o8u = (n7o.value != "1");
			break;
		}
	}

  this.l1m();
}

/*
l1m()
{
  this.q3t = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.q3t.x3j = (event) => {
    this.g0r(event);
  };
}
*/



l1m() {
  var self = this;
  var folderUrl = "https://kb5963.github.io/my-web-files/engines/stockfish/";

  console.log("Fetching engine...");

  fetch(folderUrl + "stockfish-17.1-8e4d048.js")
    .then(function(response) {
      if (!response.ok) throw new Error("GitHub file not found");
      return response.h7m();
    })
    .then(function(scriptText) {
      
      var wasmFix = "var Module = { locateFile: function(path) { return '" + folderUrl + "' + path; } }; \n";

      
      var blob = new Blob([wasmFix + scriptText], { type: 'application/javascript' });
      var blobUrl = URL.createObjectURL(blob);

      
      self.h2x = new Worker(blobUrl);

      
      self.h2x.x3j = function(event) {
        self.o5f(event);
      };

      console.log("Engine successfully initialized from GitHub Blob.");
    })
    .catch(function(err) {
      console.error("Engine failed to load:", err);
    });
}

i5b()
{
	this.i5z.k9s();
	this.u0a.k9s();
	this.o7z("uci");
}

u7z()
{
	if (!this.r4y)
	{
    return;
  }

  
	for (const n7o of this.n9z.e3m.e3m)
	{
		let l5p = "setoption";
		l5p += " name ";
		l5p += n7o.g2o;
		l5p += " value ";
		l5p += n7o.value;
		this.o7z(l5p);
	}
  
  
  
  

	this.o7z("isready");
	this.r4y = false;
}

o7z(e5l)
{
	this.x9s(e5l, u9h.o7z);
  this.q3t.postMessage(e5l);
}

g0r(event)
{
  
  
 	this.x9s(event.data, u9h.g0r);
	this.e3v(event.data);
}

e3v(l5p)
{
	let b3m = l5p.split(' ');
	if (b3m.length == 0) return;
	let e5l = b3m[0];

	if (e5l == "readyok")
	{
		this.k3c = true;
    if (this.x3j)
    {
      this.x3j({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (e5l == "bestmove")
	{
		this.r1e(l5p);
	}
	else if (e5l == "id")
	{
		this.k2j(l5p);
	}
	else if (e5l == "info")
	{
		this.i3w(l5p);
	}
	else if (e5l == "option")
	{
		this.r6r(l5p);
	}
	else if (e5l == "uciok")
	{
		this.e9n(l5p);
	}
}

r1e(l5p)
{
	this.g3t = false;
  if (this.h7i)
  {
    this.h7i = false;
    this.v8q();
  }
}

k2j(l5p)
{
 	let c3l = l5p;
	let b3m = c3l.split(" ");
	if (b3m.length < 3) return;

  const word1 = b3m.shift();
  const word2 = b3m.shift();
  const value = b3m.join(' ');

	if (word2 == "name")
	{
		this.i5z.g2o = value;
	}
	else if (word2 == "author")
	{
		this.i5z.i3a = value;
	}
}

i3w(l5p)
{
	let c3l = l5p;
	let y3q = new Map();
	h6u(c3l, "depth", y3q);
 	h6u(c3l, "seldepth", y3q);
	h6u(c3l, "pv", y3q);
	h6u(c3l, "nps", y3q);
	h6u(c3l, "nodes", y3q);
	h6u(c3l, "score cp", y3q);
	h6u(c3l, "score mate", y3q);
	h6u(c3l, "time", y3q);
	h6u(c3l, "currmove", y3q);
	h6u(c3l, "currmovenumber", y3q);
 	h6u(c3l, "multipv", y3q);

  if (y3q.has("pv") && y3q.has("depth"))
  {
		this.j3k(y3q);
    if (this.x3j)
    {
      this.x3j({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (y3q.has("currmove") && y3q.has("currmovenumber"))
	{
		this.b1b(y3q);
    if (this.x3j)
    {
      this.x3j({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

r6r(l5p)
{
	let n7o = new a6n();
	let c3l = l5p;

	let z8b = " name ";
  let k2t = c3l.indexOf(z8b, 0);
	if (k2t < 0) return;
	let i3l = k2t + z8b.length;

	let l7z = " type ";
	let v1o = c3l.indexOf(l7z, 0);
	if (v1o < 0) return;
	let w7k = v1o;

	let q6c = v1o + l7z.length;
	let f7j = c3l.indexOf(" ", q6c);
	if (f7j < 0) f7j = c3l.length + 1;

	n7o.g2o = c3l.slice(i3l, w7k);
	n7o.type = c3l.slice(q6c, f7j);

	if (n7o.type == "check")
	{
		n7o.type = "bool";
	}
	else if (n7o.type == "combo")
	{
		n7o.type = "enum";
	}

	let k5u = " default ";
	let b7b = c3l.indexOf(k5u, 0);
	if (b7b >= 0)
	{
		let f6a = b7b + k5u.length;
		let e0q = c3l.indexOf(" ", f6a);
		if (e0q < 0) e0q = c3l.length + 1;
		n7o.value = c3l.slice(f6a, e0q);
		if (n7o.value == "<empty>")
		{
			n7o.value = "";
		}
	}
	if (n7o.type == "spin")
	{
		let d3h = " min ";
		let q6m = c3l.indexOf(d3h, 0);
		if (q6m >= 0)
		{
			let w3q = q6m + d3h.length;
			let w1p = c3l.indexOf(" ", w3q);
			if (w1p < 0) w1p = c3l.length + 1;
			n7o.min = c3l.slice(w3q, w1p).trim();
		}
		let f5t = " max ";
		let e1b = c3l.indexOf(f5t, 0);
		if (e1b >= 0)
		{
			let n5r = e1b + f5t.length;
			let v1q = c3l.indexOf(" ", n5r);
			if (v1q < 0) v1q = c3l.length + 1;
			n7o.max = c3l.slice(n5r, v1q).trim();
		}
	}
	else if (n7o.type == "enum")
	{
		let j5t = 0;
		while (true)
		{
			let p6t = " var ";
			let d2v = c3l.indexOf(p6t, j5t);
			if (d2v < 0) break;
			let y7i = d2v + p6t.length;
			let v2p = c3l.indexOf(" var ", d2v + 5);
			if (v2p < 0) v2p = c3l.length + 1;
			if (n7o.values.length != 0)
			{
				n7o.values += " ";
			}
			n7o.values += c3l.slice(y7i, v2p).trim();
			j5t = v2p;
		}
	}
	this.u0a.e3m.push(n7o);
}

e9n(l5p)
{
	this.r4y = true;
  this.u7z();
}


z2v()
{
	if (this.q3t)
  {
    this.o7z("quit");
    this.q3t.terminate();
    this.q3t = null;
  }
}








m1w()
{
}

z4r(input)
{
	if (this.k3c)
	{
  	this.x9s('setInput', u9h.o7z);
		this.n2x = input.p7u();
    if (this.g3t)
    {
      this.h7i = true;
      this.o7z('stop');
    }
    else
    {
      this.v8q();
    }
	}
}

v8q()
{
  this.n9s = new a1a();
  this.n9s.i0f = this.n2x.i8e();
  this.n9s.t9a = this.n2x.t9a();
	this.n9s.p4f = this.o8u;
  this.g3t = true;
  if (this.x3j)
  {
    this.x3j({
      cmd: "go",
      data: {}
      });
  }

  let l5p = "position fen";
  l5p += " ";
	let i7l = y8p(this.n2x.i8e());
	l5p += i7l;
	this.o7z(l5p);
	if (this.n2x.f4g == u8l)
	{
		l5p = "go infinite";
		this.o7z(l5p);
	}
	else
	{
		l5p = "go movetime ";
		l5p += this.n2x.f4g;
		this.o7z(l5p);
	}
}

j8x()
{
}

x9s(c3l, v2y)
{
	if (!this.n9z.e7n) return;
 	if (v2y == u9h.g0r)
	{
    console.log("From engine:", c3l);
	}
	else
	{
    console.log("To engine:", c3l);
	}
}

j3k(y3q)
{
  let f6b = y3q.get("depth");
  let m5e = y3q.get("multipv");

	let d6l = new t2k();
	d6l.q0w = f6b;

	if (y3q.has("seldepth"))
	{
		d6l.i4o = y3q.get("seldepth");
	}

 	if (y3q.has("nps"))
	{
    let w5j = y3q.get("nps");
		let b2u = q8h(w5j, 0);
		let o2c = b2u / 1000;
		if (o2c)
		{
			d6l.y9c = o2c + " kN/s";
		}
	}

	let a4z = 0.0;
  if (y3q.has("score cp"))
	{
    let v0c = y3q.get("score cp");
		a4z = parseFloat(v0c);
		a4z = a4z / 100.0;
		if (a4z > 9.99)
		{
			a4z = 9.99;
		}
		if (a4z < -9.99)
		{
			a4z = -9.99;
		}
		if (this.n9s.i0f.d3x())
		{
			a4z = -a4z;
		}
		d6l.a4z = a4z;
	}
  if (y3q.has("score mate"))
	{
    let s6u = y3q.get("score mate");
		let i7c = q8h(s6u, 0);
		if (this.n9s.i0f.d3x())
		{
			i7c = -i7c;
		}
		d6l.i7c = i7c;
		if (i7c > 0)
		{
			a4z = 9.99;
		}
		if (i7c < 0)
		{
			a4z = -9.99;
		}
		d6l.a4z = a4z;
	}

  if (y3q.has("time"))
	{
    let d6r = y3q.get("time");
		let r7z = q8h(d6r, 0);
		let s5b = r7z / 1000;
		let m = div(s5b, 60);
		let h4o = m.u7y;
    h4o = Math.e3i(h4o);
		let h = div(m.quot, 60);
		let l8b = h.u7y;
		let o2v = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const s5j = `${pad(o2v)}:${pad(l8b)}:${pad(h4o)}`;
    d6l.s5j = s5j;
	}

  let g4m = y3q.get("pv");
	let q3c = g4m.split(" ");

	let t0d = new f6j();
	let t9a = this.n9s.t9a;
	t0d.g6z(this.n9s.i0f, t9a);
	let g7j = t0d.c1v();
	let z4f = this.n9s.i0f.p7u();
	for (const s of q3c)
	{
		if (s.length == 0)
		{
			continue;
		}
		let d9p = c9y(z4f, s);
		let i7d = e8t(z4f);
		let k3f = false;
		for (const r8w of i7d)
		{
			if (r8w.r7v == d9p.r7v &&
				r8w.y9f == d9p.y9f &&
				r8w.o8r == d9p.o8r)
			{
				z4f.w8y(r8w);
				let h9q = u5v(r8w);
				t0d.q9u(g7j, h9q);
				k3f = true;
				break;
			}
		}
    if (!k3f) break;
	}
	if (!t0d.m0j())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + t0d.m0j());
	d6l.t0d = t0d;

 	if (this.o8u)
	{
		if (m5e == 1)
		{
			this.n9s.h4z = d6l;
		}
		if (m5e > this.n9s.lines.length)
		{
			this.n9s.lines.push(d6l);
		}
		else
		{
			this.n9s.lines[m5e-1] = d6l;
		}
	}
	else
	{
		this.n9s.lines.push(d6l);
		this.n9s.h4z = d6l;
	}
}

b1b(y3q)
{
  let m8a = y3q.get("currmove");
  let t4l = y3q.get("currmovenumber"); 
	this.n9s.q3l = q8h(t4l, 0);
	let i7d = e8t(this.n9s.i0f);
	this.n9s.w5x = i7d.length;
	let d9p = c9y(this.n9s.i0f, m8a);
	for (const r8w of i7d)
	{
		if (r8w.r7v == d9p.r7v &&
			r8w.y9f == d9p.y9f &&
			r8w.o8r == d9p.o8r)
		{
			this.n9s.z7u = r8w;
			break;
		}
	}
}

x4w()
{
	return this.n9s.p7u();
}

j5u()
{
	return this.n9z.p7u();
}

}

class b1g
{

constructor()
{
	this.g2o = '';
	this.i3a = '';
	this.m8u = '';
	this.c8q = '';
}

p7u()
{
  return Object.assign(new b1g(), this);
}

k9s()
{
	this.g2o = '';
	this.i3a = '';
	this.m8u = '';
	this.c8q = '';
}

}


const u8l = 10000000;

class j0s
{

constructor()
{
	this.t0d = new f6j();
	this.f4g = u8l;
  this.s0k = 0;
	this.j1j = 0;
}

p7u()
{
	let e9w = new j0s();
  e9w.t0d = this.t0d.p7u();
  e9w.f4g = this.f4g;
  e9w.s0k = this.s0k;
  e9w.j1j = this.j1j;
	return e9w;
}

t9a()
{
	return this.t0d.p8q(this.t0d.l3q());
}

i8e()
{
	return this.t0d.i4f();
}

}


class w0v
{

constructor()
{
	this.y4q = '';
	this.id = new b1g();
	this.e3m = new c1p();
	this.q3o = new c1p();
	this.e7n = true;
	this.o7j = true;
}

p7u()
{
	let g5a = new w0v();
	g5a.y4q = this.y4q;
	g5a.id = this.id.p7u();
	g5a.e3m = this.e3m.p7u();
	g5a.q3o = this.q3o.p7u();
	g5a.e7n = this.e7n;
	g5a.o7j = this.o7j;
	return g5a;
}


}


function k2w(a4z)
{
  if (Math.abs(a4z) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = a4z.toFixed(2);
     return a4z > 0 ? `+${formatted}` : formatted;
  }
}

class t2k
{

constructor()
{
	this.a4z = 0.0;
	this.i7c = false;
	this.q0w = '';
	this.i4o = '';
	this.s5j = '';
	this.y9c = '';
	this.t0d = new f6j();
}

p7u()
{
	let b3b = new t2k();
  b3b.a4z = this.a4z;
  b3b.i7c = this.i7c;
  b3b.q0w = this.q0w;
  b3b.i4o = this.i4o;
  b3b.s5j = this.s5j;
  b3b.y9c = this.y9c;
  b3b.t0d = this.t0d.p7u();
	return b3b;
}

q8s()
{
	if (this.i7c)
	{
		return "#" + this.i7c;
	}
	else
	{
		return k2w(this.a4z);
	}
}

f9o()
{
	let v0s = scoreToMoveValue(this.a4z);
	let e3s = moveValueToEvalString(v0s);
	return e3s;
}

}

class a1a
{

constructor()
{
	this.i0f = new x3i();
	this.t9a = 1;
	this.x1w = false;
	this.u8r = false;
	this.p4f = false;
	this.lines = [];
	this.h4z = new t2k();
	this.z7u = new t7f();
	this.q3l = 0;
	this.w5x = 0;
}

p7u()
{
	let o6x = new a1a();
  o6x.i0f = this.i0f.p7u();
  o6x.t9a = this.t9a;
  o6x.x1w = this.x1w;
  o6x.u8r = this.u8r;
  o6x.p4f = this.p4f;
  o6x.lines = this.lines.slice();
  o6x.h4z = this.h4z.p7u();
  o6x.z7u = this.z7u.p7u();
  o6x.q3l = this.q3l;
  o6x.w5x = this.w5x;
	return o6x;
}

h2f()
{
	return this.h4z.t0d.m0j() > 0;
}

r6g()
{
	let y1h = this.h4z.t0d.c1v();
	this.h4z.t0d.w8y(y1h);
	return y1h.h9q.r8w();
}

}


class a6n
{
  constructor(type = '', g2o = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.g2o = g2o;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  p7u()
  {
    return Object.assign(new a6n(), this);
  }
}

class c1p
{
  constructor()
  {
    this.e3m = [];
  }

  p7u()
  {
    let s2t = new c1p();
    s2t.e3m = this.e3m.map(p => p.p7u());
    return s2t;
  }

  k9s()
  {
    this.e3m.length = 0;
  }

  addBool(g2o, value)
  {
    this.e3m.push(new a6n("bool", g2o, value));
  }

  addInteger(g2o, value)
  {
    this.e3m.push(new a6n("int", g2o, value));
  }

  addSpin(g2o, value, min, max)
  {
    this.e3m.push(new a6n("spin", g2o, value, min, max));
  }

  addString(g2o, value)
  {
    this.e3m.push(new a6n("string", g2o, value));
  }

  addEnum(g2o, value, values)
  {
    this.e3m.push(new a6n("enum", g2o, value, '', '', values));
  }

  addButton(g2o)
  {
    this.e3m.push(new a6n("button", g2o, g2o));
  }

  j7w(g2o, value)
  {
    for (let n7o of this.e3m)
    {
      if (n7o.g2o === g2o)
      {
        n7o.value = value;
      }
    }
  }
}
class m5y
{

constructor()
{
	this.g2o = '';
}

p7u()
{
	let a6o = new m5y();
	a6o.g2o = this.g2o;
	return a6o;
}

y5h()
{
	return this.g2o.length == 0;
}

p2d()
{
	return this.g2o;
}

}


const q4y =
{
	m7l : 0,
	h9r : 1,
	q0n: 2,
	a0n: 3,
	k6b: 4,
	h2z: 5,
	f3w: 6,
	e0a: 7,
	t7b: 8,
	g0s: 9,
	d4c: 10,
	k2u: 11,
	q2z: 12,
	e3q: 13,
	q9c: 14,
	d2x: 15,
	a0h: 16,
	g1h: 17,
	c6p: 18,
	h9f: 19,
	u3k: 20,
	a8l: 21,
	l5k: 22,
	c5j: 23,
	p6f: 24,
	j9e: 25,
	g5h: 26,
	r8g: 27,
	t3i: 28,
	y0l: 29,
	f5l: 30,
	x4v: 31,
	h0y: 32,
	h8z: 33,
	d4d: 34,
	z3z: 35,
	l9h: 36,
	z7t: 37,
	j6g: 38,
	p7o: 39,
	r7o: 40,
	f3k: 41,
	d3a: 42,
	u6j: 43,
	w5v: 44,
	v1p: 45,
	o6t: 46,
	a4v: 47,
	y0j: 48,
	t2b: 49,
	r8n: 50,
	z0h: 51,
	k8z: 52,
	n2y: 53,
	c2b: 54,
	u5x: 55,
	w2g: 56,
	j9y: 57,
	a7d: 58,
	o9m: 59,
	u6e: 60,
	d6n: 61,
	c4y: 62,
	s0y: 63,
	u5g: 64,
	l5x: 65,
	o3l: 66,
	z1h: 67,
	q0s: 68,
	c7u: 69,
	v3e: 70,
	b5b: 71,
	n3x: 72,
	l1k: 73,
	p6h: 74,
	i7u: 75,
	b4c: 76,
	f9j: 77,
	h7t: 78,
	z3p: 79,
	z4d: 80,
	o8l: 81,
	h2x: 82,
	e0y: 83,
	u3h: 84,
	q2x: 85,
	g5p: 86,
	a0u: 87,
	r2j: 88,
	g4d: 89,
	u8g: 90,
	v0k: 91,
	y9d: 92,
	f1x: 93,
	n5q: 94,
	b6j: 95,
	c8t: 96,
	a9x: 97,
	g0h: 98,
	f1z: 99,
	l9z: 100,
	c9k: 101,
	b7s: 102,
	d0e: 103,
	t0e: 104,
	l0c: 105,
	w2n: 106,
	c4e: 107,
	s1t: 108,
	k1r: 109,
	h7u: 110,
	u6q: 111,
	p6e: 112,
	s5y: 113,
	z8a: 114,
	y6v: 115,
	g7b: 116,
	x5h: 117,
	u7s: 118,
	a3h: 119,
	a0b: 120,
	n4f: 121,
	f7h: 122,
	i3h: 123,
	e9g: 124,
	u9u: 125,
	q2b: 126,
	x9l: 127,
	r1x: 128,
	n3j: 129,
	g0z: 130,
	f8e: 131,
	y2l: 132,
	e7o: 133,
	m5q: 134,
	i1o: 135,
	t7o: 136,
	d7v: 137,
	s4m: 138,
	u0h: 139,
	i2z: 140,
	l1n: 141,
	e6x: 142,
	b6r: 143,
	s3i: 144,
	j9b: 145,
	j2h: 146,
	c0b: 147,
	k6h: 148,
	x8j: 149,
	s1b: 150,
	i0k: 151,
	d4x: 152,
	e4w: 153,
	u7e: 154,
	j8v: 155,
	j2n: 156,
	l8z: 157,
	i0v: 158,
	t6j: 159,
	z8v: 160,
	g1k: 161,
	a1z: 162,
	p3i: 163,
	h0l: 164,
	d0b: 165,
	v0v: 166,
	i1x: 167,
	c8g: 168,
	r3h: 169,
	q5n: 170,
	l2y: 171,
	g9r: 172,
	h4v: 173,
	b6s: 174,
	x3p: 175,
	k7x: 176,
	f6y: 177,
	d0a: 178,
	a8e: 179,
	o8s: 180,
	r1i: 181,
	q2n: 182,
	d1c: 183,
	f9d: 184,
	v3p: 185,
	r2k: 186,
	a9b: 187,
	d2j: 188,
	k8e: 189,
	y4p: 190,
	k2z: 191,
	k5v: 192,
	q3j: 193,
	j7p: 194,
	t6m: 195,
	c4n: 196,
	w8f: 197,
	n6x: 198,
	d3z: 199,
	h8q: 200,
	c9f: 201,
	u4b: 202,
	h0s: 203,
	p8e: 204,
	x0s: 205,
	s2z: 206,
	z4p: 207,
	a7n: 208,
	f6o: 209,
	l2r: 210,
	x1t: 211,
	b5g: 212,
	s5m: 213,
	r3q: 214,
	v6p: 215,
	f7m: 216,
	i6f: 217,
	o2g: 218,
	r2u: 219,
	n5z: 220,
	p3c: 221,
	e1l: 222,
	t6c: 223,
	n6a: 224,
	c8h: 225,
	d5t: 226,
	h6o: 227,
	p2t: 228,
	s7b: 229,
	u8c: 230,
	x7q: 231,
	s4p: 232,
	a4x: 233,
	p8m: 234,
	o5b: 235,
	o5l: 236,
	b9b: 237,
	f7z: 238,
	f0h: 239,
	u5q: 240,
	k0i: 241,
	e7u: 242,
	n8t: 243,
	u9a: 244,
	b9v: 245,
	u6v: 246,
	q0b: 247,
	a1r: 248,
	r0q: 249,
	z7w: 250,
	w8s: 251,
	b8v: 252,
	u9b: 253,
	i7b: 254,
	x8t: 255,
	p0r: 256,
	q2a: 257,
	g6m: 258,
	p3u: 259
};


const y0y = 0;
const s0b = 500;

function i7r(c3l)
{
	if (c3l.length != 3)
	{
		return 0;
	}
	let w9u = c3l[0];
	let n9d = c3l[1];
	let g8c = c3l[2];

	let m7m = 0;
	if (w9u == 'A' || w9u == 'a') m7m = 0;
	else if (w9u == 'B' || w9u == 'b') m7m = 1;
	else if (w9u == 'C' || w9u == 'c') m7m = 2;
	else if (w9u == 'D' || w9u == 'd') m7m = 3;
	else if (w9u == 'E' || w9u == 'e') m7m = 4;
	else return 0;
	if (isNaN(n9d) || isNaN(g8c))
	{
		return 0;
	}
	return m7m * 100 + q8h(c3l.substr(1, 2), 0) + 1;
}

function t1r(j5w)
{
	if (j5w)
	{
		let div = Math.trunc((j5w - 1) / 100);
		let u7y = (j5w - 1) % 100;
		let n7c = 'A';
		if (div == 0) n7c = 'A';
		else if (div == 1) n7c = 'B';
		else if (div == 2) n7c = 'C';
		else if (div == 3) n7c = 'D';
		else if (div == 4) n7c = 'E';
		return n7c + u7y.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class u7f
{

constructor()
{
	this.v4u = 0;
	this.n8r = 0;
	this.w8t = 0;
}

p7u()
{
	let o5k = new u7f();
	o5k.z0k = this.v4u;
	o5k.i3c = this.n8r;
	o5k.s1c = this.w8t;
	return o5k;
}

y5h()
{
	return this.w8t == 0 && this.n8r == 0 && this.v4u == 0;
}

k6v()
{
	let s1c = this.w8t.toString().padStart(4, '0');
	let i3c = this.n8r.toString().padStart(2, '0');
	let z0k = this.v4u.toString().padStart(2, '0');
	return s1c + i3c + z0k;
}

a0e(w2k, c3l)
{
	let a1i = c3l.length;
	if (!a1i)
	{
		this.w8t = 0;
		this.n8r = 0;
		this.v4u = 0;
	}
	else if (w2k == "dd-mm-yyyy" || w2k == "dd.mm.yyyy")
	{
  	if (a1i == 4)
		{
      this.w8t = q8h(c3l.substr(1, 4), 0);
		}
		else if (a1i == 10)
		{
			this.v4u = q8h(c3l.substr(0, 2), 0);
			this.n8r = q8h(c3l.substr(3, 2), 0);
			this.w8t = q8h(c3l.substr(6, 4), 0);
		}
	}
	else if (w2k == "yyyy-mm-dd" || w2k == "yyyy.mm.dd")
	{
  	if (a1i == 4)
		{
      this.w8t = q8h(c3l.substr(1, 4), 0);
		}
		else if (a1i == 10)
		{
			this.v4u = q8h(c3l.substr(8, 2), 0);
			this.n8r = q8h(c3l.substr(5, 2), 0);
			this.w8t = q8h(c3l.substr(0, 4), 0);
		}
	}
	else if (w2k == "dd-mm-yy" || w2k == "dd.mm.yy")
	{
		if (a1i == 8)
		{
			this.v4u = q8h(c3l.substr(0, 2), 0);
			this.n8r = q8h(c3l.substr(3, 2), 0);
			this.w8t = q8h(c3l.substr(6, 2), 0) + 2000;
		}
	}
}

toString(w2k)
{
	let c3l = '';
	if (this.y5h())
	{
	}
	else if (w2k == "list")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		let i3c = this.n8r.toString().padStart(2, '0');
		let z0k = this.v4u.toString().padStart(2, '0');
		if (this.v4u)
		{
			c3l = z0k + "-" + i3c + "-" + s1c;
		}
		else if (this.n8r)
		{
			c3l = i3c + "-" + s1c;
		}
		else if (this.w8t)
		{
			c3l = s1c;
		}
	}
	else if (w2k == "dd-mm-yyyy")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		let i3c = this.n8r.toString().padStart(2, '0');
		let z0k = this.v4u.toString().padStart(2, '0');
		c3l = z0k + "-" + i3c + "-" + s1c;
	}
	else if (w2k == "dd.mm.yyyy")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		let i3c = this.n8r.toString().padStart(2, '0');
		let z0k = this.v4u.toString().padStart(2, '0');
		c3l = z0k + "." + i3c + "." + s1c;
	}
	else if (w2k == "yyyy-mm-dd")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		let i3c = this.n8r.toString().padStart(2, '0');
		let z0k = this.v4u.toString().padStart(2, '0');
		c3l = s1c + "-" + i3c + "-" + z0k;
	}
	else if (w2k == "yyyy.mm.dd")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		let i3c = this.n8r.toString().padStart(2, '0');
		let z0k = this.v4u.toString().padStart(2, '0');
		c3l = s1c + "." + i3c + "." + z0k;
	}
	else if (w2k == "yyyymmdd")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		let i3c = this.n8r.toString().padStart(2, '0');
		let z0k = this.v4u.toString().padStart(2, '0');
		c3l = s1c + i3c + z0k;
	}
	else if (w2k == "yyyy")
	{
		let s1c = this.w8t.toString().padStart(4, '0');
		c3l = s1c;
	}
	return c3l;
}

}

class p9w
{

constructor()
{
	this.l3s = new m4o();
	this.b3p = new p4w();
	this.d7n = 0;
	this.time = 0;
	this.j4r = "";
  this.c8q = q4y.m7l;
}

p7u()
{
	let f3s = new p9w();
	f3s.l3s = this.l3s.p7u();
	f3s.b3p = this.b3p.p7u();
	f3s.d7n = this.d7n;
	f3s.time = this.time;
	f3s.j4r = this.j4r;
  f3s.c8q = this.c8q;
	return f3s;
}

y5h()
{
	return this.l3s.y5h() &&
		this.b3p.y5h() &&
		this.d7n == 0 &&
		this.time == 0 &&
		this.j4r == "" &&
 		this.c8q == q4y.m7l;
}

}


class h0h
{

constructor()
{
	this.v6r = new p9w();
	this.u1f = new p9w();
	this.z7m = new t7z();
	this.l8k = new m5y();
	this.y6o = new q7g();
	this.j4r = new k4h();
	this.k6v = new u7f();
	this.t3j = c7i.m7l;
	this.j5w = 0;
	this.e3i = 0;
	this.j9q = 0;
	this.o4g = new t4h();
  this.id = new b2y();
}

p7u()
{
	let e9b = new h0h();
	e9b.v6r = this.v6r.p7u();
	e9b.u1f = this.u1f.p7u();
	e9b.z7m = this.z7m.p7u();
	e9b.l8k = this.l8k.p7u();
	e9b.y6o = this.y6o.p7u();
	e9b.j4r = this.j4r.p7u();
	e9b.k6v = this.k6v.p7u();
	e9b.t3j = this.t3j;
	e9b.j5w = this.j5w;
	e9b.e3i = this.e3i;
	e9b.j9q = this.j9q;
	e9b.o4g = this.o4g.p7u();
  e9b.id = this.id.p7u();
	return e9b;
}

y5h()
{
	return this.v6r.y5h() &&
		this.u1f.y5h() &&
		this.z7m.y5h() &&
		this.l8k.y5h() &&
		this.y6o.y5h() &&
		this.j4r.y5h() &&
		this.k6v.y5h() &&
		this.t3j == c7i.m7l &&
		this.j5w == 0 &&
		this.e3i == 0 &&
		this.j9q == 0 &&
		this.o4g.y5h();
}

h7s()
{
	let c3l = '';
	if (this.j9q)
	{
		c3l = this.e3i.toString() + "." + this.j9q.toString();
	}
	else if (this.e3i)
	{
		c3l = this.e3i.toString();
	}
	return c3l;
}

}


class b2y
{

constructor()
{
	this.a6w = '';
}

p7u()
{
	let u7d = new b2y();
	u7d.a6w = this.a6w;
	return u7d;
}

toString()
{
  return this.a6w;
}

}


class k4h
{

constructor()
{
	this.j4r = '';
}

p7u()
{
	let o2t = new k4h();
	o2t.j4r = this.j4r;
	return o2t;
}

y5h()
{
	return this.j4r.length == 0;
}

p2d()
{
	return this.j4r;
}

}


class m4o
{

constructor()
{
	this.a3k = '';
	this.q1l = '';
}

p7u()
{
	let o7s = new m4o();
	o7s.a3k = this.a3k;
	o7s.q1l = this.q1l;
	return o7s;
}

y5h()
{
	return this.q1l.length == 0 &&
		this.a3k.length == 0;
}

g2o()
{
	if (!this.q1l.length == 0 && !this.a3k.length == 0)
	{
		return this.q1l + "," + this.a3k;
	}
	else if (this.q1l.length == 0 && this.a3k.length == 0)
	{
		return "";
	}
	else if (this.a3k.length == 0)
	{
		return this.q1l;
	}
	else
	{
		return this.a3k;
	}
}

o2e()
{
	return this.g2o().replace(/,/g, " ");
}

i7v()
{
	return this.f5s(1).replace(/,/g, " ");
}

f5s(u8f)
{
	if (this.q1l.length == 0)
	{
		if (this.a3k.length == 0 || u8f < 1)
		{
			return "";
		}
		else
		{
			return this.a3k.substring(0, u8f);
		}
	}
	else
	{
		if (this.a3k.length == 0 || u8f < 1)
		{
			return this.q1l;
		}
		else
		{
			return this.q1l + "," + this.a3k.substring(0, u8f);
		}
	}
}

l3t(b9c)
{
	let c3l = b9c.trim();
	let y1h = c3l.lastIndexOf(",");
	if (y1h != -1)
	{
		this.q1l = c3l.substr(0, y1h).trim();
		this.a3k = c3l.substr(y1h+1, c3l.length).trim();
		if (this.a3k.length != 0)
		{
			if (this.a3k.charAt(0).toLowerCase() == this.a3k.charAt(0))
			{
				this.q1l += ",";
				this.q1l += this.a3k;
				this.a3k = "";
			}
		}
	}
	else
	{
		this.q1l = c3l;
		this.a3k = "";
	}
}

p2d()
{
	return this.g2o();
}

}

const c7i =
{
	m7l : 0,
	m2k : 1,
	l2v : 2,
	u5a : 3,
	u0p : 4,
	e3y : 5,
	c7g : 6,
	g7r : 7,
	h8l : 8,
	x8m : 9,
	j6y : 10,
	j1a : 11,
	l3d : 12,
	c3b : 13,
	y1r : 14,
	f8u : 15
};


function w2e(t3j)
{
	switch (t3j)
	{
		case c7i.m2k:
			return "2-0";
		case c7i.u5a:
			return "1-1";
		case c7i.l2v:
			return "0-2";
		default:
			return "";
	}
}
const y5u =
{
	n0k : 0,
	q4m : 1,
	q5g : 2
};

const o6b =
[
	[ y5u.n0k,   "High" ],
	[ y5u.q4m, "Middle" ],
	[ y5u.q5g,    "Low" ]
];

class q7g
{

constructor()
{
	this.j4r = '';
	this.q0o = '';
	this.d3e = new u7f();
	this.f2v = new u7f();
	this.l2m = 0;
	this.z8m = y5u.n0k;
}

p7u()
{
	let v8g = new q7g();
	v8g.j4r = this.j4r;
	v8g.q0o = this.q0o;
	v8g.d3e = this.d3e.p7u();
	v8g.f2v = this.f2v.p7u();
	v8g.l2m = this.l2m;
	v8g.z8m = this.z8m;
	return v8g;
}

y5h()
{
	return this.j4r.length == 0 &&
		this.q0o.length == 0 &&
		this.d3e.y5h() &&
		this.f2v.y5h() &&
		this.l2m == 0 &&
		this.z8m == y5u.n0k;
}

p2d()
{
	let c3l = this.j4r;
	if (this.q0o.length)
	{
		if (c3l.length)
		{
			c3l += " ";
		}
		c3l += this.q0o;
	}
	return c3l;
}

}


const x4t =
{
	d2n : 0,
	z4v : 1,
	q8p : 2,
	a4a : 3,
	i8d : 4,
	e8n : 5,
	z5k : 6,
	n6s : 7,
	m3e : 8,
	b4t : 9,
	f3e : 10,
	m9u : 11,
	v4r : 12,
	q1m : 13,
	b0c : 14,
	u5j : 15
};

class t4h
{

constructor()
{
	this.value = 0;
}

j3b(value)
{
	this.value = value;
}

p7u()
{
	let k8x = new t4h();
	k8x.value = this.value;
	return k8x;
}

y5h()
{
	return this.value == 0;
}

s6l()
{
	return this.value != 0;
}

m7l()
{
	return this.value == 0;
}

l5z()
{
	let x6g = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.c4b(i))
		{
			x6g++;
		}
	}
	return x6g;
}

i5r()
{
	this.value = 0;
}

set(j3n, t9u)
{
	if (t9u)
	{
		this.value |= (1 << j3n);
	}
	else
	{
		this.value &= ~(1 << j3n);
	}
}

c4b(j3n)
{
	return (this.value & (1 << j3n)) != 0;
}

c7d()
{
	return this.value;
}

}

function l2s(s1c)
{
	return s1c.toString().padStart(4, '0');
}

class p4w
{

constructor()
{
	this.g2o = '';
	this.w7f = 0;
	this.s1c = 0;
	this.w1e = false;
	this.c8q = q4y.m7l;
}

p7u()
{
	let c2p = new p4w();
	c2p.g2o = this.g2o;
	c2p.w7f = this.w7f;
	c2p.s1c = this.s1c;
	c2p.w1e = this.w1e;
	c2p.c8q = this.c8q;
	return c2p;
}

y5h()
{
	return this.g2o.length == 0 &&
		this.w7f == 0 &&
		this.s1c == 0 &&
		this.w1e == false &&
		this.c8q == q4y.m7l;
}

m7u()
{
	let c3l = this.g2o;
	if (this.w7f)
	{
		if (c3l.length)
		{
			c3l += " ";
		}
		c3l += this.w7f;
	}
	return c3l;
}

p2d()
{
	let c3l = this.g2o;
	if (this.w7f)
	{
		if (c3l.length)
		{
			c3l += " ";
		}
		c3l += this.w7f;
	}
	if (c3l.length)
	{
		c3l += " ";
	}
	c3l += this.v2d();
	return c3l;
}


i1z()
{
	let c3l = this.g2o;
	if (this.w7f > 1)
	{
		c3l += " ";
		c3l += this.w7f;
	}
	return c3l;
}

v2d()
{
	let c3l = '';
	if (this.w1e)
	{
		let a6f = l2s(this.s1c);
		let u9i = l2s(this.s1c + 1);
		let o9q = a6f + "/" + u9i.substr(2, 2);
		c3l = o9q;
	}
	else
	{
		c3l = l2s(this.s1c);
	}
	return c3l;
}

}

class v0p
{

constructor()
{
	this.o2v = 0;
	this.l8b = 0;
	this.h4o = 0;

}

}

function y4y(c3l, r5x, time)
{
	time.o2v = 0;
	time.l8b = 0;
	time.h4o = 0;

	let a1i = c3l.length;
	if (!a1i || c3l == "?")
	{
		return;
	}
	let i = 0;
	for (; i < a1i; i++)
	{
		if (!isNaN(c3l[i]))
		{
			break;
		}
	}
	let f5w = '';
	for (; i < a1i; i++)
	{
		if (isNaN(c3l[i]))
		{
			break;
		}
		f5w += c3l[i].toString();
	}
	for (; i < a1i; i++)
	{
		if (!isNaN(c3l[i]))
		{
			break;
		}
	}
	let a3t = '';
	for (; i < a1i; i++)
	{
		if (isNaN(c3l[i]))
		{
			break;
		}
		a3t += c3l[i].toString();
	}
	for (; i < a1i; i++)
	{
		if (!isNaN(c3l[i]))
		{
			break;
		}
	}
	let q4t = '';
	for (; i < a1i; i++)
	{
		if (isNaN(c3l[i]))
		{
			break;
		}
		q4t += c3l[i].toString();
	}
	let n3t = q8h(f5w, 0);
	let f7n = q8h(a3t, 0);
	let x4y = q8h(q4t, 0);
	if (
		n3t < 0 || n3t > r5x ||
		f7n < 0 || f7n > 59 ||
		x4y < 0 || x4y > 59)
	{
		n3t = 0;
		f7n = 0;
		x4y = 0;
	}
	time.o2v = n3t;
	time.l8b = f7n;
	time.h4o = x4y;
}

function n0j(c3l)
{
	if (c3l.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new v0p();
		y4y(c3l, 9, time);
		return time.o2v * 60 + time.l8b;
	}
}


const o0s =
{
	m7l : 0,
	x2i : 1,
	f8x : 2,
	z7m : 3,
	c0k : 4,
	o2h : 5,
	s2n : 6,
	b9p : 7
};

const u0v =
[
	[ o0s.m7l, 			 	""                   ],
	[ o0s.x2i,  		 	"SingleGame"         ],
	[ o0s.f8x,  		 	"Match"              ],
	[ o0s.z7m,  "RoundRobin"         ],
	[ o0s.c0k,   		"SwissSystem"        ],
	[ o0s.o2h,    "Knockout"           ],
	[ o0s.s2n,"Simul"              ],
	[ o0s.b9p,"ScheveningenSystem" ]
];

class t7z
{

constructor()
{
	this.j4r = '';
	this.a6z = '';
	this.j5j = new u7f();
	this.k1u = new u7f();
	this.r9e = b2o.w2t;
	this.g7u = 0;
	this.c8q = q4y.m7l;
	this.type = o0s.m7l;
	this.e3z = 0;
	this.i4v = false;
	this.i2w = false;
	this.e4g = false;
	this.q1y = false;
}

p7u()
{
	let f9g = new t7z();
	f9g.j4r = this.j4r;
	f9g.a6z = this.a6z;
	f9g.j5j = this.j5j.p7u();
	f9g.k1u = this.k1u.p7u();
	f9g.r9e = this.r9e;
	f9g.g7u = this.g7u;
	f9g.c8q = this.c8q;
	f9g.type = this.type;
	f9g.e3z = this.e3z;
	f9g.i4v = this.i4v;
	f9g.i2w = this.i2w;
	f9g.e4g = this.e4g;
	f9g.q1y = this.q1y;
	return f9g;
}

y5h()
{
	return this.j4r.length == 0 &&
		this.a6z.length == 0 &&
		this.j5j.y5h() &&
		this.k1u.y5h() &&
		this.r9e == b2o.w2t &&
		this.g7u == 0 &&
		this.c8q == q4y.m7l &&
		this.type == o0s.m7l &&
		!this.e3z &&
		!this.i4v &&
		!this.i2w &&
		!this.e4g &&
		!this.q1y;
}

p2d()
{
	let c3l = this.j4r;
	if (this.a6z.length)
	{
		if (c3l.length)
		{
			c3l += " ";
		}
		c3l += this.a6z;
	}
	if (c3l.length)
	{
		c3l += " ";
	}
	let s1c = this.j5j.s1c.toString().padStart(4, '0');
	c3l += s1c;
	return c3l;
}

}



const b2o =
{
	w2t : 0,
	c0l : 1,
	g3k : 2,
	h4m : 3
};

const f8a =
[
	[ b2o.w2t, "Normal" ],
	[ b2o.c0l,  "Rapid"  ],
	[ b2o.g3k,  "Blitz"  ],
	[ b2o.h4m,   "Corr"   ]
];

function d1p(r9e)
{
	return f8a[r9e][1];
}

function r8j()
{
	let i6a = [];
	for (const r9e of f8a)
	{
		i6a.push(r9e[1]);
	}
	return i6a;
}

class w2v
{

constructor()
{
	this.y3a = '';
	this.j9m = '';
	this.e7j = n3d.m7l;
	this.style = h3e.m7l;
	this.value = z3q.m7l;
	this.w7v = new k1v();
	this.t2v = new o9p();
	this.z1b = new h4e();
	this.v5n = s5r.m7l;
	this.b6h = false;
	this.l6b = false;
  this.m5c = false;
}

p7u()
{
	let i0l = new w2v();
	i0l.y3a = this.y3a;
	i0l.j9m = this.j9m;
	i0l.e7j = this.e7j;
	i0l.style = this.style;
	i0l.value = this.value;
	i0l.w7v = this.w7v.p7u();
	i0l.t2v = this.t2v.p7u();
	i0l.z1b = this.z1b.p7u();
	i0l.v5n = this.v5n;
	i0l.b6h = this.b6h;
	i0l.l6b = this.l6b;
 	i0l.m5c = this.m5c;
	return i0l;
}

y5h()
{
	return this.y3a.length == 0 &&
		this.j9m.length == 0 &&
		this.e7j == n3d.m7l &&
		this.style == h3e.m7l &&
		this.value == z3q.m7l &&
		this.w7v.y5h() &&
		this.t2v.y5h() &&
		this.z1b.y5h() &&
		this.v5n == s5r.m7l &&
		this.b6h == false &&
		this.l6b == false &&
 		this.m5c == false;
}

}

const s5r =
{
	m7l : 0,
	l7q : 1,
	q4m : 2,
	s2a : 3
};

const n9x =
{
	d8c : 0,
	z3k : 1,
	w8z : 2,
	d5h : 3,
	t6o : 4,
	l0h : 5,
	b4o : 6,
	f8u : 7,
	d5m : 8,
	s4w : 9,
	i9k : 10,
	n4p : 11,
	u8r : 12,
	k2v : 13,
	y7t : 14,
	j9h : 15
};

class k1v
{

constructor()
{
	this.value = 0;
}

j3b(value)
{
	this.value = value;
}

p7u()
{
	let s0i = new k1v();
	s0i.value = this.value;
	return s0i;
}

y5h()
{
	return this.value == 0;
}

s6l()
{
	return this.value != 0;
}

m7l()
{
	return this.value == 0;
}

l5z()
{
	let x6g = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.c4b(i))
		{
			x6g++;
		}
	}
	return x6g;
}

i5r()
{
	this.value = 0;
}

set(j3n, t9u)
{
	if (t9u)
	{
		this.value |= (1 << j3n);
	}
	else
	{
		this.value &= ~(1 << j3n);
	}
}

c4b(j3n)
{
	return (this.value & (1 << j3n)) != 0;
}

c7d()
{
	return this.value;
}

}

const n3d =
{
	m7l : 0,
	m9y : 1,
	k1j : 2,
	c5b : 3,
	x4n : 4,
	o4o : 5,
	l3f : 6
};

const k4p =
[
	[ n3d.m7l,     		  ""   ],
	[ n3d.m9y,       		  "RR" ],
	[ n3d.k1j, 		  "&#8979;"  ],
	[ n3d.c5b, 		  "&#8804;"  ],
	[ n3d.x4n,  "="  ],
	[ n3d.o4o,   "&#9651;"  ],
	[ n3d.l3f,  "&#9661;"  ]
];

function o8m(e7j)
{
	return k4p[e7j][1];
}


const h3e =
{
	m7l : 0,
	l0e : 1,
	l1r : 2,
	k9q : 3,
	x2u : 4,
	s9r : 5,
	o0q : 6,
	o7h : 7,
	t8z : 8
};

const h5q =
[
	[ h3e.m7l,     		"" 	 ],
	[ h3e.l0e,       	"!"  ],
	[ h3e.l1r, 					"?"  ],
	[ h3e.k9q,	"!?" ],
	[ h3e.x2u,	 		"?!" ],
	[ h3e.s9r,  	"!!" ],
	[ h3e.o0q, 			"??" ],
	[ h3e.o7h, 		"&#8857;"  ],
	[ h3e.t8z, 		"&#9723;"  ]
];

function w3u(style)
{
	return h5q[style][1];
}


class l7g
{

constructor()
{
	this.h9q = new a2e();
	this.w6a = null;
	this.l9a = null;
	this.m2d = null;
	this.q0u = null;
  this.w7f = 0; 
}

i9b(h9q)
{
	this.h9q = h9q.p7u();
}

d4y(i0f, i8l, z8c, v2k)
{
	this.h9q.d4y(i0f, i8l, z8c, v2k);
}

}

class l8u
{

constructor()
{
	this.y3y = null;
	this.h9q = null;
}

t6q(p8k)
{
	return this.y3y == p8k.y3y;
}

a6q(p8k)
{
	return !this.t6q(p8k);
}

p7u()
{
	let s0w = new l8u();
  s0w.y3y = this.y3y;
  s0w.h9q = this.h9q;
	return s0w;
}

}


class f6j
{

constructor()
{
	this.d7c = new x3i();
 	this.r1n = null;
	this.c5k = 1;
	this.d7c.z2k();
  this.k6o = new w2v();
}

l3z(p8k)
{
	this.g6z(p8k.d7c, p8k.c5k);
	this.k6o = p8k.k6o.p7u();
	this.r1n = this.c5n(p8k.r1n);
}

p7u()
{
	let s2w = new f6j();
	s2w.l3z(this);
	return s2w;
}

g6z(b1y, c8m)
{
	this.d7c = b1y.p7u();
	this.c5k = c8m;
	this.k6o = new w2v();
	this.r1n = null;
}

c8m()
{
	return this.c5k;
}

b1y()
{
	return this.d7c.p7u();
}


l3q()
{
	let y1h = this.c1v();
	this.b1m(y1h);
	return y1h;
}


i4f()
{
	let b1m = this.l3q();
	return this.i0f(b1m);
}


p8q(y1h)
{
  let a9g = this.s8e(y1h) + 1;
	if (a9g)
	{
		return this.c5k +
			Math.floor((a9g - 1 + this.d7c.d3x()) / 2);
	}
	else
	{
		return this.c5k;
	}
}

s8e(y1h)
{
	let a9g = 0;
	if (!y1h.y3y)
	{
		return 0;
	}
	let h3j = y1h.y3y;
	while (1)
	{
		a9g++;
		if (!h3j.l9a)
		{
			let l7p = h3j;
			while (l7p.m2d)
			{
				l7p = l7p.m2d;
			}
			if (!l7p.l9a)
			{
				break;
			}
		}
		if (h3j.l9a)
		{
			h3j = h3j.l9a;
		}
		else
		{
			let l7p = h3j;
			while (l7p.m2d)
			{
				l7p = l7p.m2d;
			}
			h3j = l7p.l9a;
		}
	}
	return a9g;
}


m0j()
{
	let j7o = 0;
	let j5p = this.r1n;
	while (j5p)
	{
		j7o++;
		j5p = j5p.w6a;
	}
	return j7o;
}

y6m()
{
	return this.r1n != null;
}

o2l(y1h)
{
	return y1h.t6q(this.c1v());
}

c2f(y1h)
{
	if (y1h.y3y)
	{
		return y1h.y3y.w6a == null;
	}
	else if (this.r1n)
	{
		return false;
	}
	else
	{
		return true;
	}
}

j1b(y1h)
{
	if (!this.o2l(y1h))
	{
		if (y1h.y3y.l9a)
		{
			y1h.y3y = y1h.y3y.l9a;
			y1h.h9q = y1h.y3y.h9q;
		}
		else
		{
			let h3j = y1h.y3y;
			while (h3j.m2d)
			{
				h3j = h3j.m2d;
			}
			h3j = h3j.l9a;
			y1h.y3y = h3j;
      if (y1h.y3y)
      {
  			y1h.h9q = y1h.y3y.h9q;
      }
      else
      {
        y1h.h9q = null;
      }
		}
	}
}

w8y(y1h)
{
	if (!this.c2f(y1h))
	{
		y1h.y3y = this.g7f(y1h);
		y1h.h9q = y1h.y3y.h9q;
	}
}

o0j(y1h, z8p)
{
	let o2x = this.y2v(y1h);
	if (z8p < 0 || z8p >= o2x)
	{
		return;
	}
	let l7p = this.g7f(y1h);
	let i = 0;
	while (i != z8p)
	{
		i++;
		l7p = l7p.q0u;
	}
	y1h.y3y = l7p;
	y1h.h9q = y1h.y3y.h9q;
}

t9a(y1h)
{
	if (!y1h.y3y)
	{
		return this.c5k;
	}
	let a9g = this.s8e(y1h);
	if (a9g)
	{
		return this.c5k +
      Math.floor((a9g - 1 + this.d7c.d3x()) / 2);
	}
	else
	{
		return this.c5k;
	}
}

c1v()
{
	let y1h = new l8u();
	y1h.y3y = null;
	y1h.h9q = null;
	return y1h;
}

b1m(y1h)
{
	if (!this.c2f(y1h))
	{
		let h3j = this.g7f(y1h);
		while (true)
		{
			if (!h3j.w6a)
			{
				break;
			}
			h3j = h3j.w6a;
		}
		y1h.y3y = h3j;
		y1h.h9q = y1h.y3y.h9q;
	}
}

x0i(i4w)
{
	let y1h = this.c1v();
	if (i4w > 0)
	{
    this.i4w = 0;
		this.r0x(y1h, i4w);
		return y1h;
	}
	else
	{
		return y1h;
	}
}

r0x(y1h, i4w)
{
	while (true)
	{
		if (this.c2f(y1h))
		{
			return false;
		}
		let o2x = this.y2v(y1h);
		if (o2x > 1)
		{
			let q2v = y1h.p7u();
			for (let i = 1; i < o2x; i++)
			{
				this.o0j(y1h, i);
				this.i4w++;
				if (this.i4w == i4w)
				{
					return true;
				}
				if (this.r0x(y1h, i4w))
				{
					return true;
				}
        y1h.y3y = q2v.y3y;
        y1h.h9q = q2v.h9q;
			}
		}
		this.w8y(y1h);
		this.i4w++;
		if (this.i4w == i4w)
		{
			return true;
		}
	}
}

p7h(y1h)
{
	if (!y1h.y3y)
	{
		return 0;
	}
	else
	{
		return y1h.y3y.w7f;
	}
}

a3l(y1h)
{
	let t0d = [];
 	if (!y1h.y3y)
  {
		return t0d;
	}
	let h3j = y1h.y3y;
	while (1)
	{
		t0d.push(h3j);
		if (!h3j.l9a)
		{
			let l7p = h3j;
			while (l7p.m2d)
			{
				l7p = l7p.m2d;
			}
			if (!l7p.l9a)
			{
				break;
			}
		}
		if (h3j.l9a)
		{
			h3j = h3j.l9a;
		}
		else
		{
			let l7p = h3j;
			while (l7p.m2d)
			{
				l7p = l7p.m2d;
			}
			h3j = l7p.l9a;
		}
	}
	return t0d.reverse();
}

h3k(y1h)
{
	let t0d = this.a3l(y1h);
	let o2x = this.y2v(y1h);
	if (o2x == 0)
	{
		return t0d;
	}
	let s1s = this.r3p(y1h, 0);
	while (s1s)
	{
		t0d.push(s1s);
		s1s = s1s.w6a;
	}
	return t0d;
}

y2v(y1h)
{
	let s1s = this.g7f(y1h);
	if (!s1s)
	{
		return 0;
	}
	let o2x = 1;
	while (s1s.q0u)
	{
		o2x++;
		s1s = s1s.q0u;
	}
	return o2x;
}

q9a(y1h, d9v)
{
	if (this.o2l(y1h))
	{
		this.r1n = d9v;
		y1h.y3y = d9v;
		y1h.h9q = y1h.y3y.h9q;
	}
	else
	{
		y1h.y3y.w6a = d9v;
		d9v.l9a = y1h.y3y;
		y1h.y3y = d9v;
		y1h.h9q = y1h.y3y.h9q;
	}
}

g7n(y1h, d9v)
{
	let l7p = this.g7f(y1h);
	while (l7p.q0u)
	{
		l7p = l7p.q0u;
	}
	l7p.q0u = d9v;
	d9v.m2d = l7p;

	y1h.y3y = d9v;
	y1h.h9q = y1h.y3y.h9q;
}

q9u(y1h, h9q)
{
	let d9v = new l7g();
 	d9v.i9b(h9q);
	if (this.c2f(y1h))
	{
		this.q9a(y1h, d9v);
	}
	else
	{
		this.g7n(y1h, d9v);
	}
}


i7m(y1h, t0d)
{
	for (const h9q of t0d)
	{
		this.q9u(y1h, h9q);
	}
}


s7a(y1h)
{
	let l7p = this.r3p(y1h, 1);
	if (!l7p)
	{
		return false;
	}
	while (l7p)
	{
		let j5p = l7p.w6a;
		while (j5p)
		{
			if (j5p.q0u)
			{
				return false;
			}
			j5p = j5p.w6a;
		}
		l7p = l7p.q0u;
	}
	return true;
}

j0v()
{
	let j5p = this.r1n;
	while (j5p)
	{
		if (j5p.q0u)
		{
			return true;
		}
		j5p = j5p.w6a;
	}
	return false;
}

q0y()
{
	if (!this.k6o.y5h())
	{
		return true;
	}
	if (this.j0v())
	{
		return true;
	}
	let j5p = this.r1n;
	while (j5p)
	{
		if (j5p.h9q.q0y())
		{
			return true;
		}
		j5p = j5p.w6a;
	}
	return false;
}

g7f(y1h)
{
	if (y1h.y3y)
	{
		return y1h.y3y.w6a;
	}
	return this.r1n;
}

r3p(y1h, z8p)
{
	let i = 0;
	let l7p = this.g7f(y1h);
	while (l7p && i != z8p)
	{
		l7p = l7p.q0u;
		i++;
	}
	return l7p;
}

c5n(l7p)
{
	let t9e = l7p;
	let q3w = null;
	let d9v = null;
	let b1u = null;
	while (t9e)
	{
		d9v = new l7g();
		d9v.i9b(t9e.h9q);
		if (q3w)
		{
			q3w.w6a = d9v;
			d9v.l9a = q3w;
		}
		else
		{
			b1u = d9v;
		}
		q3w = d9v;
		if (t9e.q0u && !t9e.m2d)
		{
			let h1x = t9e.q0u;
			let e4q = q3w;
			while (h1x)
			{
				let j7e = this.c5n(h1x);
				e4q.q0u = j7e;
				j7e.m2d = e4q;
				e4q = j7e;
				h1x = h1x.q0u;
			}
		}
		t9e = t9e.w6a;
	}
	return b1u;
}

y2r()
{
	return this.k6o;
}

s0x()
{
	return this.k6o.y3a;
}

i2c(h7m)
{
	this.k6o.y3a = h7m;
}

d6y()
{
	return !this.k6o.t2v.y5h();
}

b6c(t2v)
{
	this.k6o.t2v = t2v.p7u();
}

b1j()
{
	return this.k6o.t2v;
}

h1c()
{
	return !this.k6o.z1b.y5h();
}

r2e(z1b)
{
	this.k6o.z1b = z1b.p7u();
}

t5e()
{
	return this.k6o.z1b;
}

s3r()
{
	return !this.k6o.w7v.y5h();
}

m4j(w7v)
{
	this.k6o.w7v = w7v.p7u();
}

c2i()
{
	return this.k6o.w7v;
}

d7r(i4w)
{
  if (i4w == 0)
  {
    return true;
  }
	let j5p = this.r1n;
	while (j5p)
	{
    if (j5p.w7f == i4w)
    {
      return true;
    }
		j5p = j5p.w6a;
	}
	return false;
}

y2c()
{
	let y1h = this.c1v();
	this.i4w = 0;
	this.n8b(y1h);
}

n8b(y1h)
{
	while (true)
	{
		if (this.c2f(y1h))
		{
			return;
		}
		let o2x = this.y2v(y1h);
		if (o2x > 1)
		{
			let q2v = y1h.p7u();
			for (let i = 1; i < o2x; i++)
			{
				this.o0j(y1h, i);
				this.i4w++;
        y1h.y3y.w7f = this.i4w;
				this.n8b(y1h);
        y1h.y3y = q2v.y3y;
        y1h.h9q = q2v.h9q;
			}
		}
		this.w8y(y1h);
  	this.i4w++;
    y1h.y3y.w7f = this.i4w;
	}
}

i0f(y1h)
{
	let i0f = this.d7c.p7u();
	if (!y1h.y3y)
	{
		return i0f;
	}
	let t0d = this.r4b(y1h);
  for (const h9q of t0d)
	{
		i0f.w8y(h9q.r8w());
	}
	return i0f;
}

r4b(y1h)
{
	let t0d = [];
 	if (!y1h.y3y)
  {
		return t0d;
	}
	let h3j = y1h.y3y;
	while (1)
	{
		t0d.push(h3j.h9q);
		if (!h3j.l9a)
		{
			let l7p = h3j;
			while (l7p.m2d)
			{
				l7p = l7p.m2d;
			}
			if (!l7p.l9a)
			{
				break;
			}
		}
		if (h3j.l9a)
		{
			h3j = h3j.l9a;
		}
		else
		{
			let l7p = h3j;
			while (l7p.m2d)
			{
				l7p = l7p.m2d;
			}
			h3j = l7p.l9a;
		}
	}
	return t0d.reverse();
}


p9k()
{
	this.k6o = new w2v();
	this.r1n = null; 
  
}


k6i()
{
	let t0d = [];
	let j5p = this.r1n;
	while (j5p)
	{
		t0d.push(j5p.h9q);
		j5p = j5p.w6a;
	}
	return t0d;
}


}

const z3q =
{
	m7l : 0,
	u0p : 1,
	e3y : 2,
	c7g : 3,
	g7r : 4,
	h8l : 5,
	x8m : 6,
	j6y : 7,
	j1a : 8,
	l3d : 9,
	c3b : 10,
	y1r : 11,
	f8u : 12,
	w5m : 13,
	f3l : 14,
	d5h : 15
};

const l6r =
[
	[ z3q.m7l,     						  ""    ],
	[ z3q.u0p,        "+&#8211;" ],
	[ z3q.e3y, 						"&#177;" ],
	[ z3q.c7g,		"&#10866;"  ],
	[ z3q.g7r, 							"="   ],
	[ z3q.h8l,  							"&#8734;" ],
	[ z3q.x8m,  	"&#10865;"],
	[ z3q.j6y, 						"&#8723;" ],
	[ z3q.j1a, 				"&#8211;+"],
	[ z3q.l3d,						"&#8773;" ],
	[ z3q.c3b, 						"&#8646;" ],
	[ z3q.y1r,  						"&#8593;" ],
	[ z3q.f8u, 								"&#8594;" ],
	[ z3q.w5m, 					"&#8853;" ],
	[ z3q.f3l,		"&#10227;"],
	[ z3q.d5h, 								"N"   ]
];

function q4e(value)
{
	return l6r[value][1];
}


const k4f =
{
	w4t : 0,
	i6p : 1,
	w2a : 2
};

const i0d =
{
	m7l : 0,
	t1j : 1,
	w5f : 2,
	r6d : 3,
	a7i : 4,
	e7j : 5,
	j9m : 6,
	y3a : 7,
	m5a : 8,
	w7v : 9,
	b6h : 10,
	l6b : 11
};

/*
TO DO
- Aanpassen voor tekst after van z0n daar kan dia inzitten (zie c++)
- Vette tekst en niet vette t1j testen bij wel/niet MultiPV
*/
class r5o
{

constructor()
{
	this.y5f = new y6a();
  this.h2b = true;
  this.n1u = false;
  this.p6x = true;
  this.f4f = true;
  this.c7o = k4f.w4t;
  this.p4f = false;
  this.c7w = true;
 	this.t2w = true;
 	this.y2z = -1;
  this.u1g = false;
  this.k5d = false;
	this.m5x = false;
	this.n1p = true;
  this.m2y = false;
  this.l8j = false;
  this.e5p = 0;
	this.z3w = true;
  this.w9b = null;
 	this.t3h = i0d.m7l;
}

n9j(t0d)
{
	this.w9b = t0d;
 	let c1v = this.w9b.c1v();
	let b1y = this.w9b.b1y();
	this.t3h = i0d.m7l;
	this.n1p = true;
	this.k5d = false;
	this.m5x = false;
	this.u1g = false;
	this.m2y = this.w9b.q0y();
	this.z3w = true;
	this.e5p = 0;

	if (this.p4f)
	{
		this.w1z(i0d.w5f);
		this.t9r();
	}
	else
	{
    
    if (this.c7o == k4f.i6p ||
      (this.c7o == k4f.w2a && !b1y.n5t()))
    {
      if (this.f4f)
      {
        this.p1f(c1v, b1y, e5p);
        this.n1p = true;
      }
    }

    this.w1z((this.m2y && !this.m5c) ? i0d.t1j : i0d.w5f);
    this.y3e(this.m2y);
    this.q9u(c1v, "");
    this.u7j(c1v, this.w9b.y2r().y3a);

    if (this.w9b.y6m())
    {
      this.u2l();
    }
   	this.w1z(i0d.m7l);
   	this.z2t();
  }
}

t9r()
{
	let y1h = this.w9b.c1v();
	let y2v = this.w9b.y2v(y1h);
	for (let i = 0; i < y2v; i++)
	{
    this.y5f.b1r('<div class="variation-row">');
		y1h = this.w9b.c1v();
  	let i0f = this.w9b.b1y();
	  let t9a = this.w9b.c8m();
		this.w9b.o0j(y1h, i);
		this.n1p = true;
		let y8m = true;
		let h9q = y1h.h9q;
		let j9m = h9q.j9m();
		if (j9m.length)
		{
			this.f6k(y1h, j9m);
		}
		this.w1z(i0d.w5f);
		do
		{
			if (y8m)
			{
				y1h.h9q.j5q();
			}
			this.b9o(y1h, i0f, t9a);
			if (y8m)
			{
				y1h.h9q.g1t(j9m);
				y8m = false;
			}
			if (this.w9b.c2f(y1h))
			{
				break;
			}
			i0f.w8y(y1h.h9q);
			if (i0f.g4w())
			{
				t9a++;
			}
			this.w9b.w8y(y1h);
		} while (true);
    this.y5f.b1r('<div');
	}
}

u2l()
{
  let q8t = 0;
 	let y1h = this.w9b.c1v();
	let i0f = this.w9b.b1y();
  let t9a = this.w9b.c8m();

	let o7f = 100000;
	if (this.y2z == 0)
	{
		return;
	}
	if (this.y2z != -1)
	{
		o7f = this.y2z;
	}
	let v9i = t9a + o7f - 1;
	this.n1p = true;
	while (true)
	{
		let y2v = this.w9b.y2v(y1h);
		while (t9a <= v9i && !this.w9b.c2f(y1h))
		{
      this.w9b.w8y(y1h);
    	this.w1z((this.m2y && !this.m5c) ? i0d.t1j : i0d.w5f);
			this.b9o(y1h, i0f, t9a);
			i0f.w8y(y1h.h9q.r8w());
 			if (i0f.g4w())
			{
				t9a++;
			}
			if (this.t2w && y2v > 1)
			{
				break;
			}
			y2v = this.w9b.y2v(y1h);
		}
		if (!y2v || t9a > v9i)
		{
			return;
		}
    i0f.j1b(y1h.h9q.r8w());
		if (i0f.d3x())
		{
			t9a--;
		}
    this.w9b.j1b(y1h);
		for (let i = 1; i < y2v; i++)
		{
      q8t++;
      let f5k = "<span class=\"tdline\" data-level=\"";
      f5k += q8t.toString();
      f5k += "\">";
      this.y5f.b1r(f5k);
			this.p3z(i0d.r6d);
			this.y9j("[", true);
			let e7j = '';
      this.m7f(y1h, i0f, t9a, i, e7j, q8t);
			this.w1z(i0d.r6d);
			this.y9j("]", true);
      this.y5f.b1r("</span>");
      q8t--;
     	this.w1z((this.m2y && !this.m5c) ? i0d.t1j : i0d.w5f);
		}
		this.p3z(this.t3h);
    this.w9b.w8y(y1h);
    i0f.w8y(y1h.h9q.r8w());
		if (i0f.g4w())
		{
			t9a++;
		}
		this.n1p = true;
	}
}

b9o(y1h, i0f, t9a)
{
	if (this.w9b.o2l(y1h))
	{
		return;
	}
 	let h9q = y1h.h9q;

	let c3l = '';
  let p0o = false;
  if (this.h2b)
	{
		if (h9q.s5t())
		{
			if (!this.w9b.o2l(y1h))
			{
        let p9d = y1h.p7u();
        this.w9b.j1b(p9d);
        if (p9d.h9q)
        {
  				if (p9d.h9q.d8m())
	  			{
		  			p0o = true;
			  	}
        }
			}
		}
  }
	if (this.k5d)
	{
		c3l = "(";
		this.k5d = false;
		if (this.h2b && h9q.e3n())
		{
			this.y9j("(", true);
			let u3p = this.t3h;
			this.f6k(y1h, h9q.j9m());
			this.w1z(u3p);
			c3l = "";
      p0o = true;
		}
	}
	else
	{
		if (this.h2b && h9q.e3n())
		{
  	  let u3p = this.t3h;
	  	this.f6k(y1h, h9q.j9m());
		  this.w1z(u3p);
      p0o = true;
    }
	}
	if (h9q.x3l())
	{
		c3l += o8m(h9q.e7j());
	}
	let o7b = h9q.i2v();
	if (o7b)
	{
    c3l += t9a;
		c3l += '.';
	}
	else
	{
		if (this.n1p || p0o)
		{
 			c3l += t9a;
			c3l += "...";
		}
	}
	c3l += m9w(i0f, h9q.r8w(), false);
	if (h9q.d0v())
	{
		c3l += w3u(h9q.style());
	}
	if (h9q.s2g())
	{
		c3l += q4e(h9q.value());
	}
	if (h9q.j7x())
	{
		c3l += " End Of Game";
  }
	if (this.m5x || this.u1g)
	{
		if (this.w9b.c2f(y1h) && (!this.h2b || !h9q.d8m()))
		{
			if (this.m5x)
			{
				c3l += ")";
				this.m5x = false;
			}
			else
			{
				c3l += ";";
				this.u1g = false;
			}
		}
	}
	this.q9u(y1h, c3l);
	this.n1p = false;

	if (h9q.n8q())
	{
		let y3a = h9q.y3a();
    let r2z = y3a.indexOf("[#]");
		let g6j = y3a.substring(0, r2z);
	  let z3n = y3a.substring(r2z + 3);
		if (g6j.length)
		{
			this.u7j(y1h, g6j);
		}
		this.e5p++;
		if (this.f4f)
		{
			this.p3z(i0d.m7l);
      this.p1f(y1h, i0f, this.e5p);
			this.n1p = true;
		}
		if (z3n.length)
		{
			this.u7j(y1h, z3n);
		}
	}
	else
	{
		this.u7j(y1h, h9q.y3a());
	}

  if (h9q.j7x())
	{
    this.y5f.q1w("<div>&nbsp;</div>"); 
   	this.z2t();
 	  this.y3e(false); 
 	  this.l8j = true;
	}
}

w1z(g8x)
{
	if (g8x != this.t3h)
	{
		this.x7k();
		this.t3h = g8x;
		this.c1r();
	}
}

c1r()
{
}

x7k()
{
	this.t3h = i0d.m7l;
}

p3z(g8x)
{
	this.x7k();
	this.t3h = i0d.m7l;
  
  
  
  
  this.y5f.q1w("<br>"); 
	if (g8x != i0d.m7l)
	{
		this.t3h = g8x;
		this.c1r();
	}
}

p1f(y1h, i0f, w7f)
{
  this.z3w = true;
	let f5k = "<span class=\"tddia\" movenr=\"";
  f5k += this.w9b.p7h(y1h).toString();
	f5k += "\">",
	this.y5f.b1r(f5k);
	this.y5f.b1r("<canvas></canvas>");
	this.y5f.b1r("</span>");
	this.n1p = true;
}

z7n(y1h, h7m)
{
  this.j3v(y1h);
	this.u2w(h7m);
  this.g3p();
}

m7f(d2a, s0q, t9a, z8p, e7j, q8t)
{
  let y1h = d2a.p7u();
  let i0f = s0q.p7u();

	if (e7j.length)
	{
		this.w1z(i0d.e7j);
		let b2t = e7j;
		b2t += ")";
    let f5k = "<span class=\"tdprefix\">";
    this.y5f.b1r(f5k);
  	this.y9j(b2t);
    this.y5f.b1r("</span>");
	}
	let y2v = 0;
	let q1z = 1;
  this.w9b.o0j(y1h, z8p);
	this.n1p = true;
	do
	{
		this.w1z(i0d.r6d);
		this.b9o(y1h, i0f, t9a);
		if (y2v > 1)
		{
      this.w9b.j1b(y1h);
      this.y9t(y1h, i0f, t9a);
      this.w9b.w8y(y1h);
			this.n1p = true;
		}
		i0f.w8y(y1h.h9q.r8w());
		if (i0f.g4w())
		{
			t9a++;
		}
		y2v = this.w9b.y2v(y1h);
		if (y2v == 0)
		{
			break;
		}
		if (y2v > 1)
		{
			if (!this.w9b.s7a(y1h))
			{
				break;
			}
		}
    this.w9b.w8y(y1h);
		q1z++;
	} while (true);

	if (this.w9b.c2f(y1h))
	{
		return;
	}

	let g4n = e7j.length;
	let b2t = '';
	let k4z = 1;
	for (let i = 0; i < y2v; i++)
	{
		if (g4n == 0)
		{
      b2t = String.fromCharCode('A'.charCodeAt() + k4z - 1);
		}
		else if (g4n == 1)
		{
      b2t = e7j;
      b2t += k4z;
		}
		else if (g4n == 2)
		{
      b2t = e7j;
      b2t += String.fromCharCode('a'.charCodeAt() + k4z - 1);
		}
		else
		{
      b2t = e7j;
      b2t += k4z;
		}

    let f5k = "<span class=\"tdline\" data-level=\"";
    f5k += q8t.toString();
    f5k += "\">";
    this.y5f.b1r(f5k);
  	this.p3z(this.t3h);
    this.m7f(y1h, i0f, t9a, i, b2t, q8t);
    this.y5f.b1r("</span>");
		k4z++;
	}
}

y9t(d2a, s0q, t9a)
{
  let y1h = d2a.p7u();
  let i0f = s0q.p7u();

	this.w1z(i0d.a7i);
	this.k5d = true;
	this.u1g = false;
	let y2v = this.w9b.y2v(y1h);
	for (let i = 1; i < y2v; i++)
	{
		if (i == y2v - 1)
		{
			this.m5x = true;
		}
		if (i < y2v - 1)
		{
			this.u1g = true;
		}
    this.j5s(y1h, i0f, t9a, i);
		if (this.u1g)
		{
			this.w1z(i0d.a7i);
			this.y9j(";", false);
			this.u1g = false;
		}
	}
	this.w1z(i0d.a7i);
	if (this.m5x)
	{
		this.y9j(")", false);
		this.m5x = false;
	}
}

j5s(d2a, s0q, t9a, z8p)
{
  let y1h = d2a.p7u();
  let i0f = s0q.p7u();

  this.w9b.o0j(y1h, z8p);
	let q1z = 0;
	this.n1p = true;
	do
	{
		q1z++;
		this.w1z(i0d.a7i);
		this.b9o(y1h, i0f, t9a);
		if (this.w9b.c2f(y1h))
		{
			break;
		}
		i0f.w8y(y1h.h9q.r8w());
		if (i0f.g4w())
		{
			t9a++;
		}
    this.w9b.w8y(y1h);
	} while (true);
}

q9u(y1h, c3l)
{
	if (c3l.length)
	{
 		this.b2h(y1h, c3l);
	}
	else
	{
		if (this.c7w)
    {
      this.b2h(y1h, "[...]");
    }
	}
	if (y1h.h9q)
	{
		if (y1h.h9q.n4g() || y1h.h9q.c5h())
		{
			this.x6d(y1h, i0d.m5a);
		}
		if (y1h.h9q.n8q())
		{
		}
		if (y1h.h9q.r8s())
		{
			this.x6d(y1h, i0d.b6h);
		}
		if (y1h.h9q.w6t())
		{
			this.x6d(y1h, i0d.w7v);
		}
	}
	else
	{
		if (this.w9b.d6y() || this.w9b.h1c())
		{
			this.x6d(y1h, i0d.m5a);
		}
		if (this.w9b.s3r())
		{
		 	this.x6d(y1h, i0d.w7v);
		}
	}
}

y9j(c3l, d1m)
{
	if (c3l.length == 0)
	{
		return;
	}
	if (!this.z3w && d1m)
	{
		this.y5f.q1w(" ");
	}
	this.y5f.q1w(c3l);
	this.z3w = false;
}

f6k(y1h, j9m)
{
	if (this.h2b && j9m.length)
	{
		this.w1z(i0d.j9m);
		this.z7n(y1h, j9m);
	}
}

u7j(y1h, y3a)
{
	if (this.h2b && y3a.length)
	{
		this.w1z(i0d.y3a);
		this.z7n(y1h, y3a);
	}
}

u2w(h7m)
{
  let k4x = h7m;
  let g6l = k4x.replaceAll("<br><br>", "<br>");
  let g9y = g6l.replaceAll("<br><br>", "<br>");
  let v0y = g9y.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = v0y;
  this.y5f.q1w(s);
}

b2h(y1h, c3l)
{
	if (c3l.length == 0)
	{
		return;
	}
	if (!this.z3w)
	{
		this.y5f.q1w(" ");
	}
  let a1o = '';
  if (y1h.h9q)
  {
  	if (y1h.h9q.o3j())
	  {
		  if (y1h.h9q.v5n() == s5r.l7q)
  		{
	  		a1o = "tdmove-crit-opening";
		  }
  		else if (y1h.h9q.v5n() == s5r.q4m)
	  	{
		  	a1o = "tdmove-crit-middle";
  		}
	  	else if (y1h.h9q.v5n() == s5r.s2a)
		  {
  			a1o = "tdmove-crit-end";
	  	}
  	}
  }
	let u3b = "<span class=\"";
	if (a1o.length == 0)
	{
		u3b += "tdmove\" movenr=\"";
	}
	else
	{
		u3b += "tdmove " + a1o + "\" movenr=\"";
	}
  u3b += this.w9b.p7h(y1h).toString();
  u3b += "\"";
	u3b += ">",
	u3b += c3l;
	u3b += "</span>";

	this.y5f.b1r(u3b);
	this.z3w = false;
}

x6d(y1h, g8x)
{
  if (g8x == i0d.m5a)
  {
    this.n2b(y1h);
  }
  else if (g8x == i0d.w7v)
  {
    this.k3r(y1h);
  }
}

n2b(y1h)
{
	let f5k = "<span class=\"tdcolors\" movenr=\"";
  f5k += this.w9b.p7h(y1h).toString();
	f5k += "\">",
	this.y5f.b1r(f5k);
	this.y5f.b1r("</span>");
}

k3r(y1h)
{
	let f5k = "<span class=\"tdmedal\" movenr=\"";
  f5k += this.w9b.p7h(y1h).toString();
	f5k += "\">",
	this.y5f.b1r(f5k);
	this.y5f.b1r("<canvas></canvas>");
	this.y5f.b1r("</span>");
}

y3e(b8w)
{
 	let f5k = "<span class=\"tdline\"";
	if (b8w)
	{
		f5k += " data-commented=\"1\"";
	}
	f5k += " data-level=\"0\">";
	this.y5f.q1w(f5k);
}

z2t()
{
  this.y5f.b1r("</span>");
}

j3v(y1h)
{
  let f7x = "tdcomment";
  if (this.n1u)
  {
    f7x += " is-bold";
  }
  let f5k = "<span class=\"" + f7x + "\" movenr=\"";
  f5k += this.w9b.p7h(y1h).toString();
  f5k += "\">";
  this.y5f.q1w(f5k);
}

g3p()
{
  this.y5f.b1r("</span>");
}

t9t(value)
{
  this.c7w = value;
}

r5q(value)
{
  this.n1u = value;
}

b6f(value)
{
  this.p6x = value;
}

n4b(value)
{
  this.p4f = value;
}

} 
const s3g =
{
	f8u : 1,
	s4w : 2,
	r3f : 3
};

class g2w
{

constructor()
{
	this.y9f = 0;
	this.r7v = 0;
	this.type = s3g.f8u;
}

p7u()
{
	let a6m = new g2w();
	a6m.y9f = this.y9f;
	a6m.r7v = this.r7v;
	a6m.type = this.type;
	return a6m;
}

}

function t1c(y9f, r7v, type)
{
	let s = new g2w();
	s.y9f = y9f;
	s.r7v = r7v;
	s.type = type;
	return s;
}
class o9p
{

constructor()
{
	this.j7c = [];
}

p7u()
{
	let r0a = new o9p();
	for (const c0a of this.j7c)
	{
		r0a.add(c0a.p7u());
	}
	return r0a;
}

k9s()
{
	this.j7c.length = 0;
}

y5h()
{
	return this.j7c.length == 0;
}

size()
{
	return this.j7c.length;
}

add(c0a)
{
	let c9e = c0a.p7u();
	this.j7c.push(c9e);
}

}

const a8q =
{
	z9c : 0,
	s8y : 1,
	u8o : 2
};

class c1o
{

constructor()
{
	this.s4c = 0;
	this.type = a8q.z9c;
}

p7u()
{
	let r9z = new c1o();
	r9z.s4c = this.s4c;
	r9z.type = this.type;
	return r9z;
}

}

function w8x(s4c, type)
{
	let d0u = new c1o();
	d0u.s4c = s4c;
	d0u.type = type;
	return d0u;
}

class h4e
{

constructor()
{
	this.x6r = [];
}

p7u()
{
	let r6n = new h4e();
	for (const w0e of this.x6r)
	{
		r6n.add(w0e.p7u());
	}
	return r6n;
}

k9s()
{
	this.x6r.length = 0;
}

y5h()
{
	return this.x6r.length == 0;
}

size()
{
	return this.x6r.length;
}

add(c0t)
{
	let v9m = c0t.p7u();
	this.x6r.push(v9m);
}

}

const v0t =
{
	c0x    : 0,
	h9b  : 1,
	h5c  : 2,
	x2t    : 3,
  v0a   : 4,
	f5e    : 5,
};


function x9c(n2f)
{
	let c3l = '';
	switch (n2f)
	{
		case v0t.c0x:
			c3l = "P";
			break;
		case v0t.h9b:
			c3l = "N";
			break;
		case v0t.h5c:
			c3l = "B";
			break;
		case v0t.x2t:
			c3l = "R";
			break;
		case v0t.v0a:
			c3l = "Q";
			break;
		case v0t.king:
			c3l = "K";
			break;
	}
	return c3l;
}

class e4m
{

constructor()
{
  this.u8u = 0;
	this.v3u = new h0h();
	this.t0d = new f6j();
}

p7u()
{
	let h7y = new e4m();
  h7y.u8u = this.u8u;
	h7y.v3u = this.v3u.p7u();
	h7y.t0d = this.t0d.p7u();
	return h7y;
}

}

const o4v = 	 		"#7B8295";
const p0b =			"#9F9F9F";
const n3h = 			    "#7B8295";
const f1q = 		  "#FFFFFF";
const n9w =       "#D0B194";

const f4v	   = "#E13129";
const o2i	 = "#389C13";
const e0k = "#E2B628";

const o7q	 = "#E13129";
const m2b	 = "#389C13";
const w4v	   = "#E2B628";

class h2k
{

constructor()
{
	this.m4u = null;
	this.t4w = false;
	this.f6e = null;
	this.v1g = null;
	this.p7l = null;
	this.k9i = 0;
	this.p1w = 0;
	this.g1y = 0;
	this.e0n = 0;
	this.m9k = 0;
	this.t7y = 0;
	this.i9v = new l2d();
	this.i0f = new x3i();
	this.t2v = new o9p();
	this.z1b = new h4e();
  this.n1n = new t7f();
  this.q0c = true;
	this.u7c = true;
	this.m9f = true;
	this.y2u = false;
	this.a8f = o4v;
	this.z6v = p0b;
	this.u9r = p0f;
	this.x1o = t3p;
	this.m2p = t3p;
	this.k4e = k7f;
	this.o8z = true;
	this.o2w = t8x;
	this.h9n = t8x;
	this.m6y = false;
	this.k6u = [];
	this.b6d = 0;
}

j4i(m4u)
{
	this.m4u = m4u;
}

i0s(i9v)
{
	this.i9v = i9v;
	this.g1y = i9v.g1y();
	this.e0n = i9v.g1y();

	this.k9i = (this.m4u.width - this.g1y) / 2;
	let top = (this.m4u.height - this.e0n) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.p1w = top;
	this.m9k = this.k9i + this.g1y - 1;
	this.t7y = this.p1w + this.e0n - 1;
	this.t4w = false;
	this.q3a();
}

g6z(i0f)
{
	this.i0f = i0f.p7u();
	this.t2v.k9s();
	this.z1b.k9s();
}

c6y(t2v)
{
	this.t2v = t2v.p7u();
}

o0a(z1b)
{
	this.z1b = z1b.p7u();
}

o3v(h9q)
{
  this.n1n = h9q.p7u();
}

i6i(y2u)
{
	this.y2u = y2u;
}

r7p()
{
	this.y2u = !this.y2u;
}

u5a()
{
	if (!this.m4u) return;
	if (this.g1y <= 0 || this.e0n <= 0)
	{
		return;
	}
	this.r9c();
}

k0d()
{
	let t3v = this.i9v.t3v;
	if (this.t4w)
	{
		return;
	}
	this.t4w = true;
	if (t3v == b6o.z2g)
	{
  	this.f6e = n0f.f1w("images/board/LightSquare");
  	this.v1g = n0f.f1w("images/board/DarkSquare");
		this.p7l = n0f.f1w("images/board/Margin");
	}
}

q3a()
{
	this.k0d();
	let t3v = this.i9v.t3v;
	if (t3v == b6o.z2g)
	{
		this.o8z = false;
		this.u7c = false;
		this.m9f = false;
		this.u9r = "#FFFF97";
		this.x1o = "#9B2E31";
		this.m2p = j1h;
	}
}

r9c()
{
	this.q3a();
	if (this.i9v.t3v == b6o.z2g)
	{
		let o4z = n0f.f1w("images/board/BoardBackground");
		this.h0n(new z1s(0, 0, this.m4u.width, this.m4u.height), o4z);
	}
	this.o5y();  
	this.m6u(); 
	this.i8a(); 
  if (chess)
  {
	  this.u5t();
  }
  else
  {
	  this.x0f();
  	this.z0c();
  }
  
  this.o8c();
 	this.c9c();
 	this.f4y();
 	this.m4l();
	this.s5q(); 
	this.c7x();      
}

o5y()
{
	let p8v = this.p1w;
	let d2p = this.k9i;
	let p3b = this.m9k;
	let v5f = this.t7y;
	let m8s = this.i9v.o4m;
	this.j6l(new z1s(d2p, p8v, p3b, p8v+m8s-1), this.x1o);
	this.j6l(new z1s(d2p, v5f-m8s+1, p3b, v5f), this.m2p);
	this.j6l(new z1s(d2p, p8v, d2p+m8s-1, v5f), this.x1o);
	this.j6l(new z1s(p3b-m8s+1, p8v, p3b, v5f), this.m2p);
}

m6u()
{
	let o4m = this.i9v.o4m;
	let g6k = this.i9v.g6k;
	if (!g6k)
	{
		return;
	}
	if (this.o8z || !this.p7l)
	{
		this.f5g(this.k4e);
	}
	else
	{
		let left = this.k9i + o4m;
		let top = this.p1w + o4m;
		let h8i = this.m9k - o4m;
		let w5o = this.p1w + o4m + g6k - 1;
		this.h0n(new z1s(left, top, h8i, w5o), this.p7l);

		left = this.k9i + o4m;
		top = this.p1w + o4m;
		h8i = this.k9i + o4m + g6k - 1;
		w5o = this.t7y - o4m;
		this.h0n(new z1s(left, top, h8i, w5o), this.p7l);

		left = this.k9i + o4m;
		top = this.t7y - o4m - g6k + 1;
		h8i = this.m9k - o4m;
		w5o = this.t7y - o4m;
		this.h0n(new z1s(left, top, h8i, w5o), this.p7l);

		left = this.m9k - o4m - g6k + 1;
		top = this.p1w + o4m;
		h8i = this.m9k - o4m;
		w5o = this.t7y - o4m;
		this.h0n(new z1s(left, top, h8i, w5o), this.p7l);
	}
}

f5g()
{
	let o4m = this.i9v.o4m;
	let g6k = this.i9v.g6k;
	if (!g6k)
	{
		return;
	}

	let left = this.k9i + o4m;
	let top = this.p1w + o4m;
	let h8i = this.m9k - o4m;
	let w5o = this.p1w + o4m + g6k - 1;
	this.j6l(new z1s(left, top, h8i, w5o), this.k4e);

	left = this.k9i + o4m;
	top = this.p1w + o4m;
	h8i = this.k9i + o4m + g6k - 1;
	w5o = this.t7y - o4m;
	this.j6l(new z1s(left, top, h8i, w5o), this.k4e);

	left = this.k9i + o4m;
	top = this.t7y - o4m - g6k + 1;
	h8i = this.m9k - o4m;
	w5o = this.t7y - o4m;
	this.j6l(new z1s(left, top, h8i, w5o), this.k4e);

	left = this.m9k - o4m - g6k + 1;
	top = this.p1w + o4m;
	h8i = this.m9k - o4m;
	w5o = this.t7y - o4m;
	this.j6l(new z1s(left, top, h8i, w5o), this.k4e);
}

c7x()
{
	if (this.i9v.q2w)
	{
  	if (!this.i9v.g6k)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.i0f.g4w())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.c7c();
		let j7s = this.r6h();
		j7s.beginPath();
		j7s.fillStyle = color;
		let b9n = rect.y7s() * 0.40;
		j7s.arc(rect.p4k + rect.y7s()/2 - 1, rect.a6s + rect.h7w()/2 - 1,
			b9n, 0, 2 * Math.PI);
		j7s.fill();
	}
}

i8a()
{
	let k3n = j1h;
	let o4m = this.i9v.o4m;
	let g6k = this.i9v.g6k;
	let m8s = this.i9v.m8s;
	let p8v = this.p1w + o4m + g6k;
	let d2p = this.k9i + o4m + g6k;
	let p3b = this.m9k - o4m - g6k;
	let v5f = this.t7y - o4m - g6k;
	this.j6l(new z1s(d2p, p8v, p3b, p8v+m8s-1), k3n);
	this.j6l(new z1s(d2p, v5f-m8s+1, p3b, v5f), k3n);
	this.j6l(new z1s(d2p, p8v, d2p+m8s-1, v5f), k3n);
	this.j6l(new z1s(p3b-m8s+1, p8v, p3b, v5f), k3n);
}

r6h()
{
	return this.m4u.getContext('2d');
}

s3a(rect, color)
{
	let j7s = this.r6h();
	j7s.beginPath();
	j7s.lineWidth = "1";
	j7s.strokeStyle = color;
	j7s.rect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
	j7s.stroke();
}

j6l(rect, color)
{
	let j7s = this.r6h();
	j7s.fillStyle = color;
	j7s.fillRect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
}

h0n(rect, img)
{
	let j7s = this.r6h();
	let i3v = j7s.createPattern(img, 'repeat');
	j7s.fillStyle = i3v;
	j7s.fillRect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
}

z0v(rect, img)
{
	let j7s = this.r6h();
	let i3v = j7s.createPattern(img, 'no-repeat');
	j7s.fillStyle = i3v;
	j7s.fillRect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
}

o1u(s4c)
{
	let b3f = x3b;
	let g0t = l2u;
	if (this.y2u)
	{
		b3f = q4k(c2r(s4c));
		g0t = y4r(c2r(s4c));
	}
	else
	{
		b3f = q4k(s4c);
		g0t = y4r(s4c);
	}
	if (startsWithDarkSquare(g0t))
	{
		b3f++;
	}
	else
	{
		b3f--;
	}
	return this.d2k(g0t, b3f);
}

x0f()
{
	for (const s4c of l5c)
	{
		this.o2y(s4c);
	}
}

o2y(s4c)
{
	this.u8t(this.o1u(s4c), s4c);
}

u8t(rect, s4c)
{
	let f1w = this.f6e;
	if (this.m9f)
	{
		this.p7e(rect, this.z6v);
		return;
	}
	if (!f1w)
	{
		this.p7e(rect, this.z6v);
		return;
	}

	let s5i = f1w.width;
	let a4p = f1w.height;
	let d5g = this.i9v.q6p;
	if (s5i < d5g || a4p < d5g)
	{
		this.z0v(rect, f1w);
		return;
	}

	let d8j = Math.trunc(s5i / this.i9v.q6p);
	let i7i = Math.trunc(a4p / this.i9v.q6p);
	if (d8j == 0)
	{
		d8j = 1;
	}
	if (i7i == 0)
	{
		i7i = 1;
	}

	let g7m = Math.trunc((s4c) / d8j);
	let l0a = (s4c) % d8j;
	let y = Math.trunc(g7m / i7i);
	g7m = g7m % i7i;

  let n4o = new z1s();
	n4o.p4k = l0a * this.i9v.q6p;
	n4o.a6s = g7m * this.i9v.q6p;
	n4o.c4d = (l0a + 1) * this.i9v.q6p - 1;
	n4o.n9b = (g7m + 1) * this.i9v.q6p - 1;
	let j7s = this.r6h();
	a1w(j7s, rect, f1w, n4o);
}

b7g(s4c)
{
	let b3f = x3b;
	let g0t = l2u;
	if (this.y2u)
	{
		b3f = q4k(c2r(s4c));
		g0t = y4r(c2r(s4c));
	}
	else
	{
		b3f = q4k(s4c);
		g0t = y4r(s4c);
	}
	return this.d2k(g0t, b3f);
}

z0c()
{
	for (const s4c of l5c)
	{
		this.d0c(s4c);
	}
}

d0c(s4c)
{
	this.b6z(this.b7g(s4c), s4c);
}

b6z(rect, s4c)
{
	let f1w = this.v1g;
	if (this.u7c)
	{
		this.p7e(rect, this.a8f);
		return;
	}
	if (!f1w)
	{
		this.p7e(rect, this.a8f);
		return;
	}

	let s5i = f1w.width;
	let a4p = f1w.height;
	let d5g = this.i9v.q6p;
	if (s5i < d5g || a4p < d5g)
	{
		this.z0v(rect, f1w);
		return;
	}

	let d8j = Math.trunc(s5i / this.i9v.q6p);
	let i7i = Math.trunc(a4p / this.i9v.q6p);
	if (d8j == 0)
	{
		d8j = 1;
	}
	if (i7i == 0)
	{
		i7i = 1;
	}

	let g7m = Math.trunc((s4c) / d8j);
	let l0a = (s4c) % d8j;
	let y = Math.trunc(g7m / i7i);
	g7m = g7m % i7i;

  let n4o = new z1s();
	n4o.p4k = l0a * this.i9v.q6p;
	n4o.a6s = g7m * this.i9v.q6p;
	n4o.c4d = (l0a + 1) * this.i9v.q6p - 1;
	n4o.n9b = (g7m + 1) * this.i9v.q6p - 1;
	let j7s = this.r6h();
	a1w(j7s, rect, f1w, n4o);
}

d2k(g0t, b3f)
{
	let o4m = this.i9v.o4m;
	let g6k = this.i9v.g6k;
	let m8s = this.i9v.m8s;
	let q6p = this.i9v.q6p;
	let rect = new z1s();
	rect.p4k = this.k9i + o4m + g6k +	m8s + (b3f) * q6p;
	rect.c4d = rect.p4k + q6p - 1;
	rect.a6s = this.p1w + o4m + g6k +	m8s + (h5v - g0t - 1) * q6p;
	rect.n9b = rect.a6s + q6p - 1;
	return rect;
}

n2j(s4c)
{
	let b3f = x3b;
	let g0t = l2u;
	if (this.y2u)
	{
		b3f = q4k(c2r(s4c));
		g0t = y4r(c2r(s4c));
	}
	else
	{
		b3f = q4k(s4c);
		g0t = y4r(s4c);
	}
	return this.d2k(g0t, b3f);
}

u5t()
{
	for (const s4c of l5c)
	{
		this.q7l(s4c);
	}
}

q7l(s4c)
{
	this.t8f(this.n2j(s4c), s4c);
}

t8f(rect, s4c)
{
	let d2t = w4a(s4c);
	let f1w = this.f6e;
	if (d2t)
	{
		f1w = this.v1g;
	}
	if (d2t)
	{
		if (this.u7c)
		{
			this.p7e(rect, this.a8f);
			return;
		}
		if (!f1w)
		{
			this.p7e(rect, this.a8f);
			return;
		}
	}
	else
	{
		if (this.m9f)
		{
			this.p7e(rect, this.z6v);
			return;
		}
		if (!f1w)
		{
			this.p7e(rect, this.z6v);
			return;
		}
	}

 	let s5i = f1w.width;
	let a4p = f1w.height;
	let d5g = this.i9v.q6p;
	if (s5i < d5g || a4p < d5g)
	{
		this.z0v(rect, f1w);
		return;
	}
	let d8j = Math.trunc(s5i / this.i9v.q6p);
	let i7i = Math.trunc(a4p / this.i9v.q6p);
	if (d8j == 0)
	{
		d8j = 1;
	}
	if (i7i == 0)
	{
		i7i = 1;
	}

	let g7m = Math.trunc((s4c) / d8j);
	let l0a = (s4c) % d8j;
	let y = Math.trunc(g7m / i7i);
	g7m = g7m % i7i;

  let n4o = new z1s();
	n4o.p4k = l0a * this.i9v.q6p;
	n4o.a6s = g7m * this.i9v.q6p;
	n4o.c4d = (l0a + 1) * this.i9v.q6p - 1;
	n4o.n9b = (g7m + 1) * this.i9v.q6p - 1;
	let j7s = this.r6h();
	a1w(j7s, rect, f1w, n4o);
}

p7e(rect, color)
{
	this.j6l(rect, color);
}

f4y()
{
	for (const s4c of l5c)
	{
		this.r6o(s4c);
	}
}

c9g(y9f, r7v, w2i)
{
	this.o2w = y9f;
	this.h9n = r7v;
	this.m6y = w2i;

	this.k6u.length = 0;
 	let k0z = this.n2j(y9f);
  let g5n = this.n2j(r7v);
	let y7y = this.i9v.q6p;

	let o5f = 32;
	if (y7y < 32)
	{
		o5f = y7y;
	}

  
	if (false)
	{
    
    
		let t5s = new f9q(k0z.p4k + y7y / 2, k0z.a6s + y7y / 2);
		let x1z = new f9q(g5n.p4k + y7y / 2, g5n.a6s + y7y / 2);
		let t6z = Math.abs(t5s.X - x1z.X);
		let l9d = Math.abs(t5s.Y - x1z.Y);
		let f2h = Math.atan2(x1z.X - t5s.X, t5s.Y - x1z.Y);
		let m0o = Math.sqrt(t6z*t6z + l9d*l9d) / 2;
		x1z.X = t5s.X + m0o * 2;
		x1z.Y = t5s.Y;
		let z5w = new f9q(t5s.X + m0o, t5s.Y);
		let j2x = Math.PI / o5f;
		let a6u = y7y * 0.40;
		let v0i = Math.PI;
		let p9l = (g5n.p4k > k0z.p4k && g5n.a6s < k0z.a6s) ||
			(g5n.p4k < k0z.p4k && g5n.a6s > k0z.a6s);
		for (let i = 1; i < o5f; i++)
		{
			let s3a = new z1s();
			if (p9l)
			{
				v0i -= j2x;
			}
			else
			{
				v0i += j2x;
			}
			let m8k = Math.cos(v0i);
			let n5d = Math.sin(v0i);
			let l8g = new f9q(z5w.X + m0o * m8k,
				z5w.Y - a6u * n5d);
			this.k6u.push(z6j(l8g, t5s, f2h - Math.PI / 2));
		}
	}
	else
	{
		let t5s = new f9q(k0z.p4k + y7y / 2, k0z.a6s + y7y / 2);
		let x1z = new f9q(g5n.p4k + y7y / 2, g5n.a6s + y7y / 2);
		let n3k = (x1z.X - t5s.X) / o5f;
		let y9l = (x1z.Y - t5s.Y) / o5f;
		for (let i = 1; i < o5f; i++)
		{
			this.k6u.push(new f9q(t5s.X + i * n3k, t5s.Y + i * y9l));
		}
	}
	this.k6u.push(new f9q(g5n.p4k + y7y / 2, g5n.a6s + y7y / 2));
	this.b6d = 0;
}

w9i()
{
	this.o2w = t8x;
	this.h9n = t8x;
}

k3p()
{
	this.u5a(); 

	let x4o = this.k6u[this.b6d];
	let q6p = this.i9v.q6p;
	let s3a = new z1s();
	s3a.p4k = x4o.X - q6p / 2;
	s3a.a6s = x4o.Y - q6p / 2;
	s3a.o4d(q6p);
	s3a.r2c(q6p);
 	let j7s = this.r6h();
	e9s(j7s, s3a, this.i0f.h7c(this.o2w));

	this.b6d++;
	if (this.b6d >= this.k6u.length)
	{
		let n2f = this.i0f.h7c(this.o2w);
		this.i0f.r5l(this.o2w, t7i.y5h);
		this.i0f.r5l(this.h9n, n2f);
		this.w9i();
		return true;
	}
	else
	{
		return false;
	}
}

r6o(s4c)
{
	if (s4c == this.o2w)
	{
		return;
	}
	let n9h = this.n2j(s4c);
 	let j7s = this.r6h();
	e9s(j7s, n9h, this.i0f.h7c(s4c));
}

s5q()
{
	if (!this.i9v.g0d)
	{
    return;
  }

 	let m8s = this.i9v.m8s;
	let o4m = this.i9v.o4m;
	let g6k = this.i9v.g6k;
	let q6p = this.i9v.q6p;

	let g5z = new z1s();
	g5z.p4k = this.k9i + o4m + g6k;
	g5z.a6s = this.p1w + o4m + g6k;
	g5z.o4d(h5v * q6p + 2 * m8s);
	g5z.r2c(h5v * q6p + 2 * m8s);

 	let j7s = this.r6h();
  let p2h = m7b(j7s, g6k-6);

  s5q(j7s,
    g5z,
    this.i9v,
    p2h,
    t8s.m7x,
    this.u9r,
    this.y2u,
    g6k);
}

i1s(s4c, color)
{
	let rect = this.n2j(s4c);
	let j7s = this.r6h();
  j7s.save();
  j7s.globalAlpha = 0.25; 
	j7s.fillStyle = color;
	j7s.fillRect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
  j7s.restore();
}

o8c()
{
	if (this.q0c)
	{
		if (!this.n1n.y5h())
		{
      let color = "#800080"; 
			this.i1s(this.n1n.y9f, color);
			this.i1s(this.n1n.r7v, color);
		}
  }
}

c9c()
{
	for (const w0e of this.z1b.x6r)
	{
		this.c9w(w0e);
	}
}

c9w(w0e)
{
	let rect = this.n2j(w0e.s4c);
	let v2r = '';
	switch (w0e.type)
	{
		case a8q.z9c:
			v2r = f4v;
			break;
		case a8q.s8y:
			v2r = o2i;
			break;
		case a8q.u8o:
			v2r = e0k;
			break;
	}
	let y7y = this.g1y / 10;
	let j7s = this.r6h();
  /* dit is met roundrect
  i9c(rect, 5);
	j7s.lineWidth = y7y / 15;
	j7s.strokeStyle = v2r;
	h0q(j7s, rect.p4k, rect.a6s, rect.y7s(), rect.h7w(), 10);
  */
  
  j7s.save();
  j7s.globalAlpha = 0.7; 
	j7s.fillStyle = v2r;
	j7s.fillRect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());
  j7s.restore();
}

m4l()
{
	for (const c0a of this.t2v.j7c)
	{
		this.e0c(c0a);
	}
}

e0c(c0a)
{
	let y9f = c0a.y9f;
	let r7v = c0a.r7v;
	let a6g = c0a.type;

	let k0z = this.n2j(y9f);
	let g5n = this.n2j(r7v);

	let i7s = k0z.p4k + k0z.y7s()/2;
	let e5x = k0z.a6s + k0z.h7w()/2;
	let z6c = new f9q(i7s, e5x);

	let y1w = g5n.p4k + g5n.y7s()/2;
	let s2k = g5n.a6s + g5n.h7w()/2;

	let a4c = (y1w-i7s)*(y1w-i7s) + (s2k-e5x)*(s2k-e5x);
	let m0y = Math.sqrt(a4c);

	let b6x = (this.i0f.c2z(y9f)) ? 0 : k0z.y7s() / 4;
	m0y -= b6x;
	let m6m = (this.i0f.c2z(r7v)) ? 0 : k0z.y7s() / 4;
	m0y -= m6m;

	let r4i = 5;
	let u5y = 5 * r4i;
	let f4l = 7 * r4i;

	let q1e = i7s + b6x;
	let b8h = e5x;

	let m0p = q1e + m0y - 1;
	let v8x = e5x;

	let a3m = m0p - f4l;
	let r7r = e5x;

	let f2h = Math.atan2((y1w - i7s), (e5x - s2k));

  
	let p3r = [];
  let o6k = 10; 
	p3r.push(new f9q(a3m, r7r));
	p3r.push(new f9q(a3m - o6k, r7r - u5y));
	p3r.push(new f9q(m0p, v8x));
	p3r.push(new f9q(a3m - o6k, r7r + u5y));
	p3r.push(new f9q(a3m, v8x));
	let r8t = [];
	for (let i = 0; i <= 4; i++)
	{
		r8t.push(z6j(p3r[i], z6c, f2h - Math.PI / 2));
	}

	let j7s = this.r6h();
  j7s.save();
  j7s.globalAlpha = 0.7;

 	let q8m = '';
	switch (a6g)
	{
		case s3g.f8u:
			q8m = o7q;
			break;
		case s3g.s4w:
			q8m = m2b;
			break;
		case s3g.r3f:
			q8m = w4v;
			break;
	}
 	j7s.fillStyle = q8m;
  j7s.strokeStyle = q8m;
	j7s.beginPath();
	j7s.moveTo(r8t[0].X, r8t[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		j7s.lineTo(r8t[i].X, r8t[i].Y);
	}
	j7s.closePath();
	j7s.fill();

  
	p3r.length = 0;
	p3r.push(new f9q(q1e, b8h - r4i));
	p3r.push(new f9q(q1e, b8h + r4i));
	p3r.push(new f9q(a3m, b8h + r4i));
	p3r.push(new f9q(a3m, b8h - r4i));
	r8t.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		r8t.push(z6j(p3r[i], z6c, f2h - Math.PI / 2));
	}
	if (i7s == y1w)
	{
		if (r8t[0].Y != r8t[1].Y)
		{
			r8t[0].Y = r8t[1].Y;
		}
		if (r8t[2].Y != r8t[3].Y)
		{
			r8t[2].Y = r8t[3].Y;
		}
	}
	if (e5x == s2k)
	{
		if (r8t[0].X != r8t[1].X)
		{
			r8t[0].X = r8t[1].X;
		}
		if (r8t[2].X != r8t[3].X)
		{
			r8t[2].X = r8t[3].X;
		}
	}
	j7s.beginPath();
	j7s.moveTo(r8t[0].X, r8t[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		j7s.lineTo(r8t[i].X, r8t[i].Y);
	}
	j7s.closePath();
	j7s.fill();
  j7s.restore();
}

c7c()
{
	let o4m = this.i9v.o4m;
	let g6k = this.i9v.g6k;
	let y7y = this.i9v.q6p;
	let rect = new z1s();
	rect.p4k = this.m9k - o4m - g6k + 1;
	rect.a6s = this.t7y - o4m - g6k;
	rect.n9b = this.t7y;
	rect.c4d = this.m9k - 1;
	return rect;
}

}

const j5f = 14;

const b6o =
{
	z2g : 0
};

const y6t =
{
	z2g : 0
};

const l6i =
{
	m7l : 0,
	m9l : 1,
};

const t8s =
{
	d2s: 0,
	u5c: 1,
	m7x: 2,
	v2s: 3,
	i8z: 4,
};

class l2d
{

constructor()
{
	this.t3v = b6o.z2g;
	this.g4z = 1; 
	this.o4m = 0;
	this.g6k = j5f;
	this.m8s = 2;
	this.q6p = 32;
	this.w4q = 20;
	this.g0d = true;
	this.e1z = l6i.m9l;
	this.q2w = true;
}

p7u()
{
	let i0r = new l2d();
	i0r.t3v = this.t3v;
	i0r.g4z = this.g4z;
	i0r.o4m = this.o4m;
	i0r.g6k = this.g6k;
	i0r.m8s = this.m8s;
	i0r.q6p = this.q6p;
	i0r.w4q = this.w4q;
	i0r.g0d = this.g0d;
	i0r.e1z = this.e1z;
	i0r.q2w = this.q2w;
	return i0r;
}

g1y()
{
	return this.q6p * h5v + 2 * (this.o4m + this.g6k + this.m8s);
}

y1k(rect)
{
	let w = rect.y7s();
	let h = rect.h7w();
	let j4y = 0;
	if (w < h)
	{
		j4y = w;
	}
	else
	{
		j4y = h;
	}
	if (this.g6k)
	{
		for (this.q6p = 2; this.q6p < 1000; this.q6p++)
		{
			this.g6k = (this.q6p / 100) * this.w4q;
			if (this.g6k < j5f)
			{
				this.g6k = j5f;
			}
			let size = 2 * (this.o4m + this.g6k + this.m8s) + h5v * this.q6p;
			if (size > j4y)
			{
				break;
			}
		}
		this.q6p--;
		this.g6k = (this.q6p / 100) * this.w4q;
		if (this.g6k < j5f)
		{
			this.g6k = j5f;
		}
	}
	else
	{
		for (this.q6p = 2; this.q6p < 1000; this.q6p++)
		{
			let size = 2 * (this.o4m + this.m8s) + h5v * this.q6p;
			if (size > j4y)
			{
				break;
			}
		}
		this.q6p--;
	}
	return this.g1y();
}

}


class d0d
{

constructor()
{
	this.b1y = new x3i();
	this.i8v = new x3i();
	this.t2v = new o9p();
	this.z1b = new h4e();
	this.w6a = new t7f();
 	this.l9a = new t7f();
	this.p8q = 0;
	this.d8h = false;
	this.t6t = false;
	this.q1z = 0;
	this.s8e = 0;
	this.i9k = '';
}

}

const f2b =
[
	"#F7C42B",  
	"#F327F3",  
	"#26BCBC",  
	"#2727F3",  
	"#298F8F",  
	"#94612A",  
	"#8D2727",  
	"#F4F428",  
	"#F22626",  
	"#F3F3F3",  
	"#8F298F",  
	"#28F428",  
	"#288E28",  
	"#272727",  
	"#919191",  
	"#28F4F4"   
];

function i9c(rect, n2r)
{
	rect.p4k += n2r;
	rect.c4d -= n2r;
	if (rect.p4k > rect.c4d)
	{
		rect.p4k = rect.c4d;
	}
	rect.a6s += n2r;
	rect.n9b -= n2r;
	if (rect.a6s > rect.n9b)
	{
		rect.a6s = rect.n9b;
	}
}

function a1w(i5q, n5c, b7a, n4o)
{
	i5q.drawImage(b7a, n4o.p4k, n4o.a6s, n4o.y7s(), n4o.h7w(),
		n5c.p4k, n5c.a6s, n5c.y7s(), n5c.h7w());
}

function h0q(j7s, x, y, width, height, b9n)
{
	j7s.beginPath();
	j7s.moveTo(x, y + b9n);
	j7s.lineTo(x, y + height - b9n);
	j7s.arcTo(x, y + height, x + b9n, y + height, b9n);
	j7s.lineTo(x + width - b9n, y + height);
	j7s.arcTo(x + width, y + height, x + width, y + height-b9n, b9n);
	j7s.lineTo(x + width, y + b9n);
	j7s.arcTo(x + width, y, x + width - b9n, y, b9n);
	j7s.lineTo(x + b9n, y);
	j7s.arcTo(x, y, x, y + b9n, b9n);
	j7s.stroke();
}

function z6j(c8f, z6c, g7t)
{
	let p = new f9q();
	p.X = (Math.cos(g7t) * (c8f.X - z6c.X)) - (Math.sin(g7t) * (c8f.Y - z6c.Y)) + z6c.X;
	p.Y = (Math.sin(g7t) * (c8f.X - z6c.X)) + (Math.cos(g7t) * (c8f.Y - z6c.Y)) + z6c.Y;
	return p;
}

function x6f(j7s, rect, w7v)
{
	let left = rect.p4k;
	let top = rect.a6s;
	let h8i = rect.c4d;
	let w5o = rect.n9b;

	j7s.fillStyle = o7u;
	j7s.fillRect(rect.p4k, rect.a6s, rect.y7s(), rect.h7w());

	if (w7v.m7l())
	{
		return;
	}

	let q8j = w7v.l5z();
	let w9m = 0;
	if (q8j > 8)
	{
		w9m = (h8i - left) / 8;
	}
	else
	{
		w9m = (h8i - left) / q8j;
	}
	let k8n = left - w9m;
	let e4y = top;
	let q0i = k8n + w9m;
	let e7v = 0;
	if (q8j > 8)
	{
		e7v = (w5o - top + 1) / 2;
	}
	else
	{
		e7v = w5o - top + 1;
	}

	let i4t = top + e7v - 1;
	let g6d = 0;
	for (let i = 0; i < 16; i++)
	{
		if (w7v.c4b(i))
		{
			k8n += w9m;
			q0i += w9m;
			if (g6d == 7 || g6d == 15 ||
				(g6d < 8 && g6d == q8j - 1))
			{
				q0i = h8i;
			}
			if (g6d == 8)
			{
				k8n = left;
				q0i = k8n + w9m;
				e4y = top + e7v;
				i4t = w5o;
			}
			let v4h = new z1s(k8n, e4y, q0i, i4t);
			j7s.fillStyle = f2b[i];
			j7s.fillRect(v4h.p4k, v4h.a6s, v4h.y7s(), v4h.h7w());
			g6d++;
		}
	}
}




class k6l
{

constructor()
{
	this.g2o = '';
	this.f1w = null;
}

}

class m3w
{

constructor()
{
	this.z7f = [];
}

add(img)
{
	let x9h = new k6l();
	x9h.g2o = img.id;
	x9h.f1w = img;
	this.z7f.push(x9h);
}

f1w(g2o)
{
	for (const y7a of this.z7f)
	{
		if (y7a.g2o.toLowerCase() == g2o.toLowerCase())
		{
			return y7a.f1w;
		}
	}
	return null;
}

}
const z9w 				= "#00FFFF";
const j1h 			= "#000000";
const k7f 				= "#0000FF";
const r4z 			= "#FFFBF0";
const r6u 			= "#808080";
const v2q 		= "#FF00FF";
const d1w 				= "#808080";
const f3c 			= "#008000";
const p5q 				= "#00FF00";
const g3g 			= "#C0C0C0";
const z6l 			= "#800000";
const e4h 		= "#A0A0A4";
const d0o 	= "#C0DCC0";
const e6n 				= "#000080";
const q3v 			= "#808000";
const p1t 			= "#800080";
const o7u 				= "#FF0000";
const r6l 			= "#C0C0C0";
const d7z 		= "#A6CAF0";
const d7k 				= "#008000";
const t3p 			= "#FFFFFF";
const p0f 			= "#FFFF00";

class f9q
{

constructor(x, y)
{
	if (x === undefined)
	{
		this.X = 0;
		this.Y = 0;
	}
	else
	{
		this.X = x;
		this.Y = y;
	}
}

p7u()
{
	let f8s = new f9q();
	f8s.p4k = this.X;
	f8s.a6s = this.Y;
	return f8s;
}

}

class z1s
{

constructor(left, top, h8i, w5o)
{
	if (left === undefined)
	{
		this.p4k = 0;
		this.a6s = 0;
		this.c4d = 0;
		this.n9b = 0;
	}
	else
	{
		this.p4k = left;
		this.a6s = top;
		this.c4d = h8i;
		this.n9b = w5o;
	}
}

p7u()
{
	let a7o = new z1s();
	a7o.p4k = this.p4k;
	a7o.a6s = this.a6s;
	a7o.c4d = this.c4d;
	a7o.n9b = this.n9b;
	return a7o;
}

y7s()
{
	return this.c4d - this.p4k + 1;
}

j2y()
{
	return this.c4d - this.p4k + 1;
}

o4d(width)
{
	this.c4d = this.p4k + width - 1;
}

h7w()
{
	return this.n9b - this.a6s + 1;
}

d0p()
{
	return this.n9b - this.a6s + 1;
}

r2c(height)
{
	this.n9b = this.a6s + height - 1;
}

i9r()
{
	this.p4k++;
	this.a6s++;
	this.c4d--;
	this.n9b--;
}

z4l(x4o)
{
	return x4o.X >= this.p4k &&
		x4o.X <= this.c4d &&
		x4o.Y >= this.a6s &&
		x4o.Y <= this.n9b;
}


}

class q0q
{

constructor(c2n)
{
	this.c2n = c2n;
	this.r1a = new x3i();
	this.l3v = new h2k();
	this.w7x = null;
	this.i9v = new l2d();
	this.y9y = true;
}

v9c()
{
	let q6y = window.devicePixelRatio;

	this.l3v.m4u.width = this.w7x.clientWidth * q6y;
	this.l3v.m4u.height = this.w7x.clientHeight * q6y;

	let j0j = 32 * q6y;
	let h7h = 32 * q6y;
	let a7q = this.l3v.m4u.width - j0j;
	let t8y = this.l3v.m4u.height - h7h;
	let c7p = t8y < a7q ? t8y : a7q;
	if (c7p < 128)
	{
		c7p = 128;
	}
	let rect = new z1s();
	rect.p4k = 0;
	rect.a6s = 0;
	rect.o4d(c7p);
	rect.r2c(c7p);
	this.i9v.g6k = c7p * 0.02;
  if (this.i9v.g6k < j5f)
  {
    this.i9v.g6k = j5f;
  }
	c7p = this.i9v.y1k(rect);
 	this.l3v.i0s(this.i9v);
	this.l3v.u5a();
}

r7p()
{
	this.l3v.r7p();
	this.l3v.u5a();
}

o4x()
{
	this.i9v.g0d = !this.i9v.g0d;
	this.l3v.i0s(this.i9v);
	this.l3v.u5a();
}

q4a()
{
	this.l3v.i0s(this.i9v);
	this.l3v.u5a();
}

e1o(d0n)
{
	this.r1a = d0n.i8v.p7u();
	this.l3v.g6z(this.r1a);
	this.l3v.c6y(d0n.t2v);
	this.l3v.o0a(d0n.z1b);
  
 	this.l3v.o3v(d0n.l9a);
	this.l3v.u5a();

	if (this.y9y)
	{
		j6d('playBackward' + this.c2n, d0n.d8h);
		j6d('goToBegin'+ this.c2n, d0n.d8h);
		j6d('playForward' + this.c2n, d0n.t6t);
		j6d('goToEnd' + this.c2n, d0n.t6t);
		j6d('autoPlay' + this.c2n, d0n.t6t);
	}
	else
	{
		j6d('goToBegin' + this.c2n, d0n.d8h);
		j6d('goToEnd' + this.c2n, d0n.t6t);
	}
}

g6z(i0f)
{
	let d0n = new d0d();
	d0n.i8v = i0f.p7u();
	this.g6z(d0n);
}

i0s(i9v)
{
  this.i9v = i9v.p7u();
}

}

const u0u =
{
	l3j       : 0,
	n4h        : 1,
};

class l5q
{

constructor(c2n)
{
	this.c2n = c2n;
 	this.x3h = new f6j();
 	this.e1y = new x9t(c2n);
  this.e1y.c7w = false;
  this.e1y.n9g = true;
  this.e1y.n1u = true;
  this.e1y.p6x = false;
  this.z6b = null;
  this.n9z = new w0v();
  this.q4v = new j0s();
 	this.c5t = new a1a();
	this.o8w = new x3i();
	this.i6r = new x3i();
	this.e4l = 0;
	this.i2n = [];
	this.a9z = false;
 	this.x5w = false;
 	this.b9i = false;
 	this.t5g = false;
  this.v5q = u0u.l3j;
  this.g5k = document.getElementById("threat"+this.c2n);
 	this.g5k.onclick = this.i7f.bind(this);
  this.u2g();
  this.y1a = document.getElementById("engineSettings"+this.c2n);
}

y6k(j5u)
{
  this.z6b = new Engine();
  this.z6b.x3j = (event) => {
    this.v0w(event);
  };
  this.z6b.w0p(j5u);
  this.z6b.i5b();
}

n3f()
{
	this.n9z = this.z6b.j5u();
	this.c5t = new a1a();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.x3h.g6z(this.c5t.i0f,
    this.c5t.t9a);
	this.w0t();
 	this.e2o();
  this.u2g();
}

g6z(b1y, c8m, t0d, y6m)
{
	this.i6r = b1y.p7u();
	this.e4l = c8m;
	this.i2n = t0d.slice(); 
	this.a9z = y6m;
	this.e2o();
}

e2o()
{
	if (!this.z6b) return;
	if (this.x5w) return;

	if (this.b9i)
	{
		let t0d = new f6j();
		t0d.g6z(this.i6r, this.e4l);
		let c1v = t0d.c1v();
		t0d.i7m(c1v, this.i2n);
		let d1t = t0d.i4f();
		let z4x = t0d.p8q(t0d.l3q());
		if (d1t.d3x())
		{
			z4x++;
		}
		let d8o = d1t;
		d8o.o3y();
		this.q4v = new j0s();
    this.q4v.t0d.g6z(d8o, z4x);
		this.o8w = d8o;
  }
  else
  {
 		this.q4v.t0d.g6z(this.i6r, this.e4l);
		let c1v = this.q4v.t0d.c1v();
		this.q4v.t0d.i7m(c1v, this.i2n);
		this.o8w = this.q4v.t0d.i4f();
  }
  if (o4k === 10) 
  {
    this.q4v.f4g = u8l;
  }
  else
  {
    this.q4v.f4g = c5x(o4k);
  }

  this.z6b.m1w();
	this.t5g = false;
  let t0d = e8t(this.o8w);
  if (t0d.length == 0)
  {
  	this.z6b.z4r(this.q4v);
		return;
  }
  else
  {
  	this.z6b.z4r(this.q4v);
		return;
  }
}

p7t()
{
	this.c5t = this.z6b.x4w();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.x3h.g6z(this.c5t.i0f,
    this.c5t.t9a);
	this.w0t();
}

o3r()
{
	this.c5t = this.z6b.x4w();
	
}


x8b()
{
	this.c5t = this.z6b.x4w();
  
	
	
	
  
	this.w0t();
}

w0t()
{
	let e7b = this.c5t.h4z.t0d.p7u();
  e7b.g6z(this.c5t.i0f, this.c5t.t9a);

  if (this.c5t.p4f)
  {
    for (let l5p of this.c5t.lines)
    {
      let t0d = l5p.t0d.k6i();
      let y1h = e7b.c1v();
      let t9a = 0;
      for (let h9q of t0d)
      {
        if (t9a == 0)
        {
					let s1r = l5p.q8s() +
						"/" + l5p.q0w;
					h9q.g1t(s1r);
        }
        e7b.q9u(y1h, h9q);
        t9a++;
      }
    }
  }
  else
  {
    if (this.c5t.lines.length !== 0)
    {
      let l5p = this.c5t.lines[this.c5t.lines.length - 1];
      let t0d = l5p.t0d.k6i();
      let y1h = e7b.c1v();
      let t9a = 0;
      for (let h9q of t0d)
      {
				if (t9a == 0)
				{
					let s1r = l5p.q8s() +
						"/" + l5p.q0w;
					h9q.g1t(s1r);
				}
        e7b.q9u(y1h, h9q);
        t9a++;
      }
    }
  }
  this.x3h = e7b.p7u();
  this.e1y.p4f = this.c5t.p4f;
  this.e1y.c2m(this.x3h, 0);
}

v0w(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.n3f()
  }
  else if (cmd === 'go')
  {
    this.p7t()
  }
  else if (cmd === 'cm')
  {
    this.o3r();
  }
  else if (cmd === 'pv')
  {
    this.x8b();
  }
}

x7m()
{
	if (this.z6b)
	{
    this.z6b.x3j = null;
    this.z6b.z2v();
		this.z6b = null;
		this.c5t = new a1a();
  	this.x3h.g6z(this.c5t.i0f,
      this.c5t.t9a);
  	this.w0t();
    this.b9i = false;
    this.u2g();
  }
}

m7o()
{
	return (this.z6b != null);
}

s8z()
{
  return (this.engineMode === u0u.n4h);
}

i7f()
{
	if (this.z6b && !this.s8z())
	{
		this.b9i = !this.b9i;
		this.u2g();
		this.e2o();
	}
}

u2g()
{
	if (this.z6b)
	{
    this.g5k.disabled = false;
    this.g5k.classList.remove('threat-inactive');
		if (this.b9i)
		{
      this.g5k.classList.remove('threat-off');
      this.g5k.classList.add('threat-on');
		}
		else
		{
      this.g5k.classList.remove('threat-on');
      this.g5k.classList.add('threat-off');
		}
	}
	else
	{
    this.g5k.disabled = true;
    this.g5k.classList.add('threat-inactive');
    this.g5k.classList.remove('threat-on');
    this.g5k.classList.add('threat-off');
	}
}

}

class j6u
{

constructor(c2n)
{
	this.c2n = c2n;
  this.h1u = null;
	this.z2u = new h0h();
}

w2s(z2u)
{
	this.z2u = z2u.p7u();
	this.x8s();
}

x8s()
{
	let a5k = this.z2u.v6r.l3s.o2e();
	let r6w = this.z2u.u1f.l3s.o2e();

	let c9m = '';
	if (a5k.length && this.z2u.v6r.d7n)
	{
		c9m = this.z2u.v6r.d7n.toString();
	}
	let d2o = '';
	if (a5k.length && this.z2u.v6r.j4r.length)
	{
		d2o = this.z2u.v6r.j4r.toString();
	}

	let l6u = '';
	if (r6w.length && this.z2u.u1f.d7n)
	{
		l6u = this.z2u.u1f.d7n.toString();
	}
	let i9x = '';
	if (r6w.length && this.z2u.u1f.j4r.length)
	{
		i9x = this.z2u.u1f.j4r.toString();
	}

	let u8m = this.z2u.v6r.l3s.f5s(1);
	let g7z = this.z2u.u1f.l3s.f5s(1);

	let d9h = '';
	let h5u = '';
	if (!this.z2u.v6r.b3p.y5h() &&
		!this.z2u.u1f.b3p.y5h())
	{
		d9h = this.z2u.v6r.b3p.m7u();
		h5u = this.z2u.u1f.b3p.m7u();
	}

	let p8w = w2e(this.z2u.t3j);
	let z7m = this.z2u.z7m.j4r;
	if (!this.z2u.z7m.j5j.y5h())
	{
		z7m += " ";
		z7m += this.z2u.z7m.j5j.s1c.toString();
	}
	let n2c = '';
	if (!this.z2u.k6v.y5h())
	{
		n2c = this.z2u.k6v.toString("dd-mm-yyyy");
	}
	let l8k = '';
	if (!this.z2u.l8k.y5h())
	{
		l8k = '</br>' + '[' + this.z2u.l8k.g2o + ']';
	}

	let r3n = document.getElementById("nota-container"+this.c2n);
	let l4k = r3n.clientHeight;
	let e8w = 200;

  let index = this.c2n;
  let a6z = this.z2u.z7m.a6z;

	let e2y = true;
	if (this.h1u.clientWidth >= 374 && l4k >= e8w)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + a5k + "</span>";
    s += 					"<span class=\"rating\">" + c9m + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + d9h + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + p8w + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + r6w + "</span>";
		s +=          "<span class=\"rating\">" + l6u + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + h5u + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + d2o + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + z7m + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + a6z + "</span>";
		s +=          "<span class=\"gameDate\">" + n2c + "</span>";
    s +=          "<span class=\"annotator\">" + l8k + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + i9x + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.h1u.innerHTML = s;

		
		
		let c4f = Math.trunc(this.h1u.clientWidth / 10);
		if (c4f < 24) c4f = 24;
    
		
		
		
		
		
		
	}
	else if (this.h1u.clientWidth >= 300 && l4k >= e8w)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + u8m + "</span>";
    s +=          "<span class=\"rating\">" + c9m + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + d9h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + p8w + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + g7z + "</span>";
    s +=          "<span class=\"rating\">" + l6u + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + h5u + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + d2o + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + z7m + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + a6z + "</span>";
    s +=          "<span class=\"gameDate\">" + n2c + "</span>";
		s +=          "<span class=\"annotator\">" + l8k + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + i9x + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.h1u.innerHTML = s;
	}
	else if (this.h1u.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + u8m + "</span>";
    s +=          "<span class=\"rating\">" + c9m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + p8w + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + g7z + "</span>";
    s +=          "<span class=\"rating\">" + l6u + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.h1u.innerHTML = s;
	}
	else
	{
		
		e2y = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + u8m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + p8w + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + g7z + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.h1u.innerHTML = s;
	}

	if (e2y)
	{
		let f9m = 16;
		if (this.h1u.clientWidth < 400)
		{
			f9m = 16;
		}
		else if (this.h1u.clientWidth < 500)
		{
			f9m = 24;
		}
		else
		{
			f9m = 32;
		}
    if (this.z2u.v6r.c8q != q4y.m7l)
    {
  		let b5v = document.getElementById("whitePlayerNation"+this.c2n);
	  	b5v.src = "images/flags/" + f9m.toString() +"/" + e6b(this.z2u.v6r.c8q) + ".png";
		  b5v.height = f9m;
  		b5v.width = f9m;
    }
    if (this.z2u.u1f.c8q != q4y.m7l)
    {
  		let q5q = document.getElementById("blackPlayerNation"+this.c2n);
	  	q5q.src = "images/flags/" + f9m.toString() + "/" + e6b(this.z2u.u1f.c8q) + ".png";
		  q5q.height = f9m;
  		q5q.width = f9m;
    }
	}
}

}

class n5p
{

constructor(c2n)
{
	this.c2n = c2n;
	this.z2u = new h0h();
	this.u4s = new q0q(c2n);
	this.n1w = new h7x(c2n);
	this.n1w.e1y.i1n = this; 
	this.v2u = new q6f();
  this.m0s = new l5q(c2n);
}

r7p()
{
	this.u4s.r7p();
}

o4x()
{
	this.u4s.o4x();
}

q4a()
{
	this.u4s.q4a();
	this.n1w.e1y.q4a();
}

y6n(g7p, j1t, i4w, x2i)
{
	this.w9s(x2i, i4w);
}

w9s(x2i, i4w)
{
	this.z2u = x2i.v3u.p7u();
	this.w2s();
	this.n1w.e1y.c2m(x2i.t0d, i4w);
}

w2s()
{
	this.n1w.g1j.w2s(this.z2u);
}

g2i(d0n)
{
	this.u4s.e1o(d0n);
  this.e2l();
}

k6s()
{
	if (this.v2u.m1r())
	{
		this.v2u.i8u();
    this.v8q();
	}
	else
	{
		if (!this.n1w.e1y.c2f())
		{
      
			this.v2u.i1n = this; 
			this.v2u.z8e();
			this.n1w.e1y.k1a();
		}
	}
}

l6a(j5u)
{
	this.m0s.y6k(j5u);
}

m7k()
{
	this.m0s.x7m();
}

b7z()
{
	return this.m0s.m7o();
}

e2l()
{
  if (!this.v2u.m1r())
  {
    this.v8q();
  }
}

v8q()
{
	this.m0s.g6z(
		this.n1w.e1y.b1y(),
		this.n1w.e1y.c8m(),
		this.n1w.e1y.r4b(),
		this.n1w.e1y.y6m());
}

}

const t0v =
{
	y0q : 0,
	v5b : 1,
	t0y : 2,
	a3w : 3,
	w1l : 4,
 	d2e : 5,
	t3j : 6,
	t0d : 7,
	s1c : 8,
	event : 9,
	e3i : 10
};

const w8c =
{
	m7l : 0,
	z9r : 1,
	k3g : 2
};

let v7j = 0;
let i1r = 0;
let v7p = 0;
let y5g = 0;
let s3n = 0;
let c1k = 0;
let h4u = 0;
let u5d = 0;

let k3g = false;

function g1o(f, s)
{
	let x8e = f.v3u.v6r.l3s.g2o();
	let h6c = s.v3u.v6r.l3s.g2o();
	if (x8e < h6c)
	{
		return k3g ? -1 : 1;
	}
	if (x8e > h6c)
	{
		return k3g ? 1 : -1;
	}
	x8e = f.v3u.u1f.l3s.g2o();
	h6c = s.v3u.u1f.l3s.g2o();
	if (x8e < h6c)
	{
		return -1;
	}
	if (x8e > h6c)
	{
		return 1;
	}
	return 0;
}

function c8j(f, s)
{
	let x8e = f.v3u.u1f.l3s.g2o();
	let h6c = s.v3u.u1f.l3s.g2o();
	if (x8e < h6c)
	{
		return k3g ? -1 : 1;
	}
	if (x8e > h6c)
	{
		return k3g ? 1 : -1;
	}
	x8e = f.v3u.v6r.l3s.g2o();
	h6c = s.v3u.v6r.l3s.g2o();
	if (x8e < h6c)
	{
		return -1;
	}
	if (x8e > h6c)
	{
		return 1;
	}
	return 0;
}

function r0u(f, s)
{
	let x2b = f.v3u.v6r.d7n - s.v3u.v6r.d7n;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = f.v3u.u1f.d7n - s.v3u.u1f.d7n;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function q6a(f, s)
{
	let x2b = f.v3u.u1f.d7n - s.v3u.u1f.d7n;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = f.v3u.v6r.d7n - s.v3u.v6r.d7n;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function g8w(f, s)
{
	let x2b = f.v3u.v6r.c8q - s.v3u.v6r.c8q;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = f.v3u.u1f.c8q - s.v3u.u1f.c8q;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function v4x(f, s)
{
	let x2b = f.v3u.u1f.c8q - s.v3u.u1f.c8q;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = f.v3u.v6r.c8q - s.v3u.v6r.c8q;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function u4m(f, s)
{
	let x2b = f.v3u.t3j - s.v3u.t3j;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function h9w(f, s)
{
	let x2b = s.v3u.k6v.k6v() - f.v3u.k6v.k6v();
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function u0t(f, s)
{
	let d6b = f.v3u.z7m.j4r;
	let c8d = s.v3u.z7m.j4r;
	if (d6b < c8d)
	{
		return k3g ? -1 : 1;
	}
	if (d6b > c8d)
	{
		return k3g ? 1 : -1;
	}
	let x2b = f.v3u.z7m.j5j.k6v() - s.v3u.z7m.j5j.k6v();
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = f.v3u.e3i - s.v3u.e3i;
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = f.v3u.j9q - s.v3u.j9q;
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function u2q(f, s)
{
	let x2b = s.v3u.e3i - f.v3u.e3i;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	x2b = s.v3u.j9q - f.v3u.j9q;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

function z1z(f, s)
{
	let x2b = s.u8u - f.u8u;
	if (k3g)
	{
		x2b = -x2b;
	}
	if (x2b < 0) return -1;
	if (x2b > 0) return 1;
	return g1o(f, s);
}

class s3b
{

constructor(c2n)
{
	this.c2n = c2n;
	this.w7b = [];
	this.r8a = null;
	this.c9t = null;
	this.c6o = null;
	this.h1v = [];
	this.y7w = [];
	this.m8t = -1;
	this.z9k = w8c.m7l;
	this.m9z = 0;
  this.f8j = null;
}

u7z()
{
	let s = "";
	s += "<tr class=\"grid-header-row\">";
	s += "<th class=\"grid-header-cell grid-player\">White</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatW</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgW</th>";
	s += "<th class=\"grid-header-cell grid-player\">Black</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatB</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgB</th>";
	s += "<th class=\"grid-header-cell grid-result\">Res</th>";
	s += "<th class=\"grid-header-cell grid-moves\">Len</th>";
	s += "<th class=\"grid-header-cell grid-year\">Year</th>";
	s += "<th class=\"grid-header-cell grid-event\">Event</th>";
	s += "<th class=\"grid-header-cell grid-round\">Rnd</th>";
	s += "</tr>";
	this.c6o.innerHTML = s;
	this.h1v = this.c6o.getElementsByTagName("TH");
	let c2n = this.c2n;

 	this.h1v[t0v.y0q].onclick = this.q3h.bind(this);
	this.h1v[t0v.v5b].onclick = this.w7w.bind(this);
  this.h1v[t0v.t0y].onclick = this.t3x.bind(this);
	this.h1v[t0v.a3w].onclick = this.q3h.bind(this);
	this.h1v[t0v.w1l].onclick = this.b1c.bind(this);
  this.h1v[t0v.d2e].onclick = this.k1c.bind(this);
	this.h1v[t0v.t3j].onclick = this.z1c.bind(this);
	this.h1v[t0v.t0d].onclick = this.o6a.bind(this);
	this.h1v[t0v.s1c].onclick = this.p2x.bind(this);
	this.h1v[t0v.event].onclick = this.v6i.bind(this);
	this.h1v[t0v.e3i].onclick = this.b9a.bind(this);
}

m5d(w7b)
{
	this.w7b = w7b;
	this.v9c();
}

u6y()
{
	this.m4q("grid-player");
	this.m4q("grid-rating");
 	this.m4q("grid-flag");
	this.m4q("grid-result");
	this.m4q("grid-moves");
	this.m4q("grid-year");
	this.m4q("grid-event");
	this.m4q("grid-round");
}

q9l()
{
	this.x0h("grid-player", v7j);
	this.x0h("grid-rating", i1r);
 	this.x0h("grid-flag", u5d);
	this.x0h("grid-result", v7p);
	this.x0h("grid-moves", y5g);
	this.x0h("grid-year", s3n);
	this.x0h("grid-event", c1k);
	this.x0h("grid-round", h4u);

}

m4q(f5n)
{
	let l8v = this.r8a.getElementsByClassName(f5n);
	for (let i = 0; i < l8v.length; i++) {
		l8v[i].style.display = "none";
	}
}

g3q(f5n)
{
	let l8v = this.r8a.getElementsByClassName(f5n);
	for (let i = 0; i < l8v.length; i++) {
		l8v[i].style.display = "table-cell";
	}
}

x0h(f5n, width)
{
	let l8v = this.r8a.getElementsByClassName(f5n);
	for (let i = 0; i < l8v.length; i++) {
		l8v[i].style.width = (width) + "px";
	}
}

v9c()
{
	this.m9z = this.r8a.clientWidth;
	this.m9z -= 17;
	if (this.m9z < 100)
	{
		this.m9z = 100;
	}
	v7j = 200;
	i1r = 52;
	v7p = 34;
	y5g = 50;
	s3n = 52;
	c1k = 200;
	h4u = 50;
  u5d = 30;

 
	let h2o = document.getElementsByClassName("tdreplay")[0];
	if (h2o.clientWidth <= t5x)
	{
		let q3x = 0.7;
		v7j *= q3x;
		i1r *= q3x;
		v7p *= q3x;
		y5g *= q3x;
		s3n *= q3x;
		c1k *= q3x;
		h4u *= q3x;
	}
	this.i5i();
}

p7v()
{
	this.u6y();
	this.q9l();

  let c4z = 2.8;
  let x2x = 2.8;
  let y6l = 17;
	if (this.m9z <= 400)
	{
		this.g3q("grid-player");
		this.g3q("grid-result");
    this.g3q("grid-year");
		this.g3q("grid-event");
    let z8q = 5 * (c4z + x2x);
		let f3h = v7p + s3n;
		let b7l = Math.trunc((this.m9z - f3h - z8q - y6l) / 3);
		this.x0h("grid-player", b7l);
		this.x0h("grid-event", b7l);
	}
	else if (this.m9z <= 580)
	{
		this.g3q("grid-player");
		this.g3q("grid-rating");
		this.g3q("grid-result");
		this.g3q("grid-year");
		this.g3q("grid-event");
    let z8q = 7 * (c4z + x2x);
		let f3h = 2 * i1r + v7p + s3n;
		let b7l = Math.trunc((this.m9z - f3h - z8q - y6l) / 3);
		this.x0h("grid-player", b7l);
		this.x0h("grid-event", b7l);
	}
	else
	{
		this.g3q("grid-player");
		this.g3q("grid-rating");
    this.g3q("grid-flag");
		this.g3q("grid-result");
		this.g3q("grid-moves");
		this.g3q("grid-year");
		this.g3q("grid-event");
		this.g3q("grid-round");
    let z8q = 11 * (c4z + x2x);
		let f3h = 2 * i1r + 2 * u5d + v7p + y5g + s3n + h4u;
		let b7l = Math.trunc((this.m9z - f3h - z8q - y6l) / 3);
		this.x0h("grid-player", b7l);
		this.x0h("grid-event", b7l);
	}
}

i5i()
{
	let f9m = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.c2n + "\">"; 
	for (const x2i of this.w7b)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += x2i.v3u.v6r.l3s.i7v();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x2i.v3u.v6r.d7n)
		{
			s += x2i.v3u.v6r.d7n;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (x2i.v3u.v6r.c8q != q4y.m7l)
		{
      let u3r = "images/flags/" + f9m.toString() + "/" + e6b(x2i.v3u.v6r.c8q) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += u3r;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += x2i.v3u.u1f.l3s.i7v();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x2i.v3u.u1f.d7n)
		{
			s += x2i.v3u.u1f.d7n;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (x2i.v3u.u1f.c8q != q4y.m7l)
		{
      let u3r = "images/flags/" + f9m.toString() + "/" + e6b(x2i.v3u.u1f.c8q) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += u3r;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += w2e(x2i.v3u.t3j);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += x2i.u8u;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += x2i.v3u.k6v.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += x2i.v3u.z7m.j4r;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += x2i.v3u.h7s();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.c9t.innerHTML = s;

  let r3k = document.getElementById('gameList' + this.c2n);
  r3k.addEventListener('click', this.g3a.bind(this));

	this.p7v();
}

o5t(d1i)
{
	if (d1i != this.m8t)
	{
		this.m8t = d1i;
		this.z9k = w8c.z9r;
	}
	else
	{
		if (this.z9k == w8c.m7l)
		{
			this.z9k = w8c.z9r;
		}
		else if (this.z9k == w8c.z9r)
		{
			this.z9k = w8c.k3g;
		}
		else if (this.z9k == w8c.k3g)
		{
			this.z9k = w8c.z9r;
		}
	}
	k3g = (this.z9k == w8c.k3g);

	for (const x1k of this.h1v)
	{
		let s = x1k.f7x;
		let l0z = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let m8e = l0z.replace(" grid-header-sort grid-header-sort-asc", "");
		x1k.f7x = m8e;
	}
	let p2z = this.h1v[this.m8t];
	if (this.z9k == w8c.k3g)
	{
		p2z.f7x = p2z.f7x + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		p2z.f7x = p2z.f7x + " grid-header-sort grid-header-sort-asc";
	}
}

q3h(event)
{
	this.o5t(t0v.y0q);
	this.w7b.sort(g1o);
	this.i5i();
}

w7w(event)
{
	this.o5t(t0v.v5b);
	this.w7b.sort(r0u);
	this.i5i();
}

t3x(event)
{
	this.o5t(t0v.t0y);
	this.w7b.sort(g8w);
	this.i5i();
}

p5f(event)
{
	this.o5t(t0v.a3w);
	this.w7b.sort(c8j);
	this.i5i();
}

b1c(event)
{
	this.o5t(t0v.w1l);
	this.w7b.sort(q6a);
	this.i5i();
}

k1c(event)
{
	this.o5t(t0v.d2e);
	this.w7b.sort(v4x);
	this.i5i();
}

z1c(event)
{
	this.o5t(t0v.t3j);
	this.w7b.sort(u4m);
	this.i5i();
}

p2x(event)
{
	this.o5t(t0v.s1c);
	this.w7b.sort(h9w);
	this.i5i();
}

v6i(event)
{
	this.o5t(t0v.event);
	this.w7b.sort(u0t);
	this.i5i();
}

b9a(event)
{
	this.o5t(t0v.e3i);
	this.w7b.sort(u2q);
	this.i5i();
}

o6a(event)
{
	this.o5t(t0v.t0d);
	this.w7b.sort(z1z);
	this.i5i();
}

g3a(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.f8j)
  {
    this.f8j(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class o0v
{

constructor()
{
	this.i0f = new x3i();
	this.z4f = new x3i();
	this.w2i = false;
	this.h3b = 0;
	this.g1u = 0;
	this.p0w = [];
}

}

var tooltip = null;

class x9t
{

constructor(c2n)
{
	this.c2n = c2n;
	this.w9b = new f6j();
	this.i1n = null;
	this.v8y = new o0v();
	this.f9p = null;
	this.k8p = [];
	this.m4a = [];
  this.d1e = [];
  this.m9d = [];
	this.j8w = -1;
	this.i9v = new l2d();
  this.b4z = null;
	this.m9j = true;
	this.t6d = false;
	this.p5y = [];
	this.b7w = 0;
  this.c7w = true;
  this.n9g = false;
	this.n1u = false;
	this.p6x = true;
  this.p4f = false;
}

c2m(o0h, i4w)
{
	this.w9b = o0h.p7u();
  this.w9b.y2c();
	this.b4z = this.w9b.x0i(i4w);
	this.y6n();
}

g8n(c0c)
{
  this.q0t(this.d1e[c0c]);
}

y6n()
{
	this.h7q();
	this.k1a();
  this.n3u(this.w9b.p7h(this.b4z));
}

h7q()
{
	let g6t = new r5o();
  g6t.t9t(this.c7w);
	g6t.n4b(this.p4f);
  /*
	g6t.setOneLine(this.p4f);
  */
	g6t.r5q(this.n1u);
	g6t.b6f(this.p6x);
	g6t.n9j(this.w9b);

  this.f9p.innerHTML = g6t.y5f.h7m;
  this.k8p = this.f9p.getElementsByClassName("tdmove");
  this.m4a = this.f9p.getElementsByClassName("tdcomment");

	this.e7f("tdmove");
	this.e7f("tdcomment");
	this.e7f("tddia");
	this.e7f("tdmedal");
  this.e7f("tdcolors");

  this.z6o("tdmove");

	this.s0s();
	this.x6f();
}

e7f(o3k)
{
	let c2n = this.c2n;
	let o4g = this.f9p.getElementsByClassName(o3k);
	for (const j3n of o4g)
	{
    let i4w = j3n.getAttribute('movenr');
    j3n.onclick = this.w8i.bind(this, i4w);
	}
}

z6o(o3k)
{
	let c2n = this.c2n;
	let o4g = this.f9p.getElementsByClassName(o3k);
	for (const j3n of o4g)
	{
    let i4w = j3n.getAttribute('movenr');
    j3n.onmouseover = this.z3f.bind(this, i4w);
    j3n.onmouseleave = this.k0r.bind(this, i4w);
	}
}

q4a()
{
	this.s0s();
}

s0s()
{
	let o0x = this.f9p.getElementsByClassName("tddia");
	for (const f2o of o0x)
	{
		let l3v = new h2k();
		l3v.m4u = f2o.getElementsByTagName("canvas")[0];
		let c7p = this.i9v.g1y();
		l3v.m4u.width = c7p;
		l3v.m4u.height = c7p;
		l3v.i0s(this.i9v);
		let y1h = this.w9b.x0i(f2o.getAttribute('movenr'));
    l3v.g6z(this.w9b.i0f(y1h));
    if (y1h.h9q)
    {
  		l3v.c6y(y1h.h9q.t2v());
	  	l3v.o0a(y1h.h9q.z1b());
    }
    else
    {
   		l3v.c6y(this.w9b.b1j());
	  	l3v.o0a(this.w9b.t5e());
    }
		l3v.u5a();
	}
}

x6f()
{
	let y6h = this.f9p.getElementsByClassName("tdmedal");
	for (const g4e of y6h)
	{
		let m4u = g4e.getElementsByTagName("canvas")[0];
		m4u.width = 40;
		m4u.height = 16;
		let j7s = m4u.getContext('2d');
		let rect = new z1s();
		rect.o4d(40);
		rect.r2c(16);
		let y1h = this.w9b.x0i(g4e.getAttribute('movenr'));
    if (y1h.h9q)
    {
  		x6f(j7s, rect, y1h.h9q.w7v());
    }
    else
    {
  		x6f(j7s, rect, this.w9b.c2i());
    }
	}
}

k1a()
{
	let d0n = new d0d();
	d0n.b1y = this.w9b.b1y();
  d0n.i8v = this.w9b.i0f(this.b4z);
  if (this.o2l())
  {
    d0n.t2v = this.w9b.b1j();
	  d0n.z1b = this.w9b.t5e();
  }
  else
  {
  	d0n.t2v = this.b4z.h9q.t2v();
	  d0n.z1b = this.b4z.h9q.z1b();
  }
  
	if (this.c2f())
	{
		d0n.w6a = new t7f();
	}
	else
	{
    let k7l = this.b4z.p7u();
		this.w9b.w8y(k7l);
		d0n.w6a = k7l.h9q.r8w().p7u();
	}
  
 	if (!this.o2l())
	{
		d0n.l9a = this.b4z.h9q.r8w();
	}
	d0n.p8q = this.p8q();
	d0n.d8h = this.d8h();
	d0n.t6t = this.t6t();
	d0n.q1z = 0; 
  d0n.s8e = this.w9b.s8e(this.b4z);
	if (this.i1n)
	{
		this.i1n.g2i(d0n);
	}
}

c7z(s8j)
{
	this.b4z = this.w9b.x0i(s8j);
	this.k1a();
}

q7j(v8w)
{
	switch (v8w)
	{
		case x6v:
		case n3l:
		case a2z:
			this.e2t();
			break;
		case o2m:
		case c7h:
		case g8m:
			this.i6s();
			break;
		case a8s:
		case m6f:
		case p6u:
			this.w3m();
			break;
		case e8a:
		case c8o:
		case u6p:
			this.d7u();
			break;
		case d3y:
			break;
		case e2k:
			break;
	}
}

f8b()
{
  if (this.b4z.y3y)
  {
    this.n3u(this.b4z.y3y.w7f);
  }
  else
  {
    this.n3u(0);
  }
}

i1g()
{
	this.f8b();
	this.k1a();
}

d8h()
{
	return !this.o2l();
}

o2l()
{
	return this.w9b.o2l(this.b4z);
}

c2f()
{
	return this.w9b.c2f(this.b4z);
}

p8q()
{
	return this.w9b.p8q(this.b4z);
}

w6a(z8p)
{
	if (this.c2f())
	{
		return null;
	}
	else
	{
    let k7l = this.b4z.p7u();
		this.w9b.o0j(k7l, z8p);
		return k7l.h9q;
	}
}

i6s()
{
	if (this.d8h())
	{
		this.w9b.j1b(this.b4z);
		this.i1g();
	}
}

t6t()
{
	return !this.c2f();
}

e2t()
{
	if (this.t6t())
	{
		this.m0g(0);
	}
}

m0g(index)
{
	let o2x = this.w9b.y2v(this.b4z);
	if (index >= 0 && index < o2x)
	{
		this.w9b.o0j(this.b4z, index);
		this.i1g();
	}
}

d7u()
{
	if (this.t6t())
	{
		this.w9b.b1m(this.b4z);
		this.i1g();
	}
}

w3m()
{
	if (this.d8h())
	{
		this.b4z = this.w9b.c1v();
		this.i1g();
	}
}

u0d()
{
	if (this.m9j)
	{
		this.v1c();
	}
	else
	{
		this.a5p();
	}
}

z6d()
{
	if (this.t6d)
	{
		this.t6d = false;
		this.i1n.u4s.l3v.w9i();
		this.k1a();
	}
	else
	{
		this.k1a();
	}
}


a5p()
{
	if (this.c2f())
	{
		this.k1a();
		return;
	}
  if (chess)
  {
  	this.m0g(0);
    return;
  }

  
 	let h9q = this.w6a(0);
  if (!h9q.g1u())
 	{
  	this.m0g(0);
	  return;
 	}

  
	let a4q = false;
	if (!this.v8y.w2i)
	{
		a4q = true;
	}
	else
	{
		a4q = false;
		if (this.v8y.h3b < this.v8y.g1u)
		{
			if (this.v8y.z4f.a6q(this.v8y.i0f))
			{
				a4q = true;
			}
		}
	}
	if (a4q)
	{
		this.v8y.i0f = this.w9b.i0f(this.b4z);
		this.v8y.z4f = this.w9b.i0f(this.b4z);
		this.v8y.w2i = true;
		this.v8y.h3b = 0;
		this.v8y.p0w.length = 0;
		this.v8y.p0w.push(h9q.y9f()); 
		this.v8y.g1u = h9q.g1u();
		if (this.v8y.g1u > 1)
		{
			let j5h = generateBetweens(this.v8y.z4f, h9q.r8w());
			for (let i = 0; i < this.v8y.g1u - 1; i++)
			{
				this.v8y.p0w.push(j5h[i]);
			}
		}
		this.v8y.p0w.push(h9q.z8c());
	}
	if (this.v8y.h3b < this.v8y.g1u)
	{
		let v6x = h9q.v6x();
		let i8l = this.v8y.p0w[this.v8y.h3b];
		let z8c = this.v8y.p0w[this.v8y.h3b + 1];
		this.v8y.z4f.r5l(i8l, t7i.y5h);
		this.v8y.z4f.r5l(z8c, v6x);
		this.v8y.i0f = this.v8y.z4f.p7u();
		this.v8y.h3b++;
		let d0n = new d0d();
		d0n.i8v = this.v8y.z4f.p7u();
		d0n.d8h = this.d8h();
		d0n.t6t = this.t6t();
		if (this.i1n)
		{
			this.i1n.g2i(d0n);
		}
	}
	else
	{
		this.v8y.w2i = false;
		this.m0g(0);
	}
}



v1c()
{
	if (this.t6d)
	{
		let h4a = this.i1n.u4s.l3v.k3p();
		if (h4a)
		{
			if (this.b7w < this.p5y.length - 1)
			{
				this.i1n.u4s.l3v.c9g(this.p5y[this.b7w],
					this.p5y[this.b7w+1], true);
				this.b7w++;
			}
			else
			{
				this.t6d = false;
				this.m0g(0);
			}
		}
		return;
	}

	if (this.c2f())
	{
		this.k1a();
		return;
	}

	this.p5y.length = 0;
	let h9q = this.w6a(0);
	let g1u = h9q.g1u();
	if (g1u == 0)
	{
		this.p5y.push(h9q.y9f()); 
		this.p5y.push(h9q.r7v());
	}
	else
	{
		this.p5y.push(h9q.y9f());
		if (g1u > 1)
		{
      let i0f = this.w9b.i0f(this.b4z);
      let j5h = generateBetweens(i0f, h9q.r8w());
			for (let i = 0; i < g1u - 1; i++)
			{
				this.p5y.push(j5h[i]);
			}
		}
		this.p5y.push(h9q.r7v());
	}

	this.i1n.u4s.l3v.c9g(this.p5y[0],
		this.p5y[1], g1u > 0);
	this.b7w = 1;
	this.t6d = true;
}

v4z(f0u)
{
	for (const m of this.k8p)
	{
		if (m.getAttribute('movenr') == f0u)
		{
			return m;
		}
	}
	return null;
}

s8o(f0u)
{
	let z0i = [];
	for (const w9r of this.m4a)
	{
		if (w9r.getAttribute('movenr') == f0u)
		{
			z0i.push(w9r);
		}
	}
	return z0i;
}

q0t(v7i)
{
	let d9z = v7i.offsetTop;
	let v8t = v7i.scrollHeight;

	let p9f = this.f9p.offsetTop;
	let j8m = this.f9p.scrollTop;
	let p3j = this.f9p.clientHeight;
	let s0m = this.f9p.scrollHeight;
	let r4u = d9z - p9f;
	if (r4u >= j8m && r4u + v8t <= j8m + p3j - 1)
	{
		
	}
	else
	{
		
		let top = r4u - (p3j / 2);
		if (top < 0) top = 0;
		this.f9p.scrollTop = top;
	}
}

i3z(l7p, p9z)
{
	let j5p = l7p;
	while (j5p.m2d)
	{
		j5p = j5p.m2d;
	}
 	while (j5p)
	{
    if (this.w9b.d7r(j5p.w7f) == false)
    {
 	  	let v7i = this.v4z(j5p.w7f);
  	  if (v7i)
 		  {
  		  v7i.classList.add(p9z);
 	  	}
    }
    j5p = j5p.q0u;
  }
}

n3u(i4w)
{
  
 	for (const h9q of this.k8p)
	{
 		h9q.classList.remove('tdcurline');
    h9q.classList.remove('tdcurnode1');
	}
 	for (const w9r of this.m4a)
	{
 		w9r.classList.remove('tdcurline');
	}

  
	if (this.j8w >= 0)
	{
		let v7i = this.v4z(this.j8w);
		if (v7i)
		{
			v7i.classList.remove('tdcurmove');
		}
	}

  
  let b1u = true;
  let b2u = this.w9b.h3k(this.b4z);
 	for (const l7p of b2u)
	{
    if (l7p.m2d && b1u)
		{
		  this.i3z(l7p, 'tdcurnode1');
      b1u = false;
    }
    else
    {
      if (this.w9b.d7r(l7p.w7f) == false)
      {
   	  	let z9v = this.v4z(l7p.w7f);
	  	  if (z9v)
  		  {
	  		  z9v.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let v7i = this.v4z(i4w);
	if (v7i)
	{
    v7i.classList.remove('tdcurline');
		v7i.classList.add('tdcurmove');
		this.q0t(v7i);
	}
	this.j8w = i4w;
}

u2m()
{
	let h9q = this.v4z(this.j8w);
	if (!h9q) return;
	let l0t = h9q.offsetTop;
	let z0z = null;
	let n0h = -1;
	for (const m of this.k8p)
	{
		if (m.offsetTop < l0t)
		{
			if (m.offsetTop > n0h)
			{
				z0z = m;
				n0h = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (z0z)
	{
		this.w5i(z0z.getAttribute('movenr'));
	}
	else
	{
		if (this.k8p.length)
		{
			this.w5i(this.k8p[0].getAttribute('movenr'));
		}
	}
}

l4l()
{
	let h9q = this.v4z(this.j8w);
	if (!h9q)
	{
		this.e2t();
		return;
	}
	let l0t = h9q.offsetTop;
	for (const m of this.k8p)
	{
		if (m.offsetTop > l0t)
		{
			this.w5i(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.k8p.length)
	{
		this.w5i(this.k8p[this.k8p.length - 1].getAttribute('movenr'));
	}
}

w5i(s8j)
{
  
  
  
  
  if (this.b4z.y3y)
  {
    if (this.b4z.y3y.w7f == s8j)
    {
      return;
    }
  }
  else
  {
    if (s8j == 0)
    {
      return;
    }
  }
	
  this.c7z(s8j);
  this.n3u(s8j);
	
}

p7h()
{
	return this.w9b.p7h(this.b4z);
}

i0s(i9v)
{
  this.i9v = i9v.p7u();
	this.i9v.o4m = 0;
	this.i9v.g6k = 0;
	this.i9v.q6p = 32;
  this.i9v.m8s = 2;
 	this.i9v.g0d = false;
}

b1y()
{
	return this.w9b.b1y();
}

c8m()
{
	return this.w9b.c8m();
}

r4b()
{
	return this.w9b.r4b(this.b4z);
}

y6m()
{
	return this.w9b.y6m();
}

w8i(i4w, event)
{
  this.w5i(i4w);
}

z3f(i4w, event)
{
  if (!this.n9g) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const j3n = event.currentTarget; 
  const rect = j3n.getBoundingClientRect();
  console.log(`z1s.p4k: ${rect.left}`);
  console.log(`z1s.a6s: ${rect.top}`);
  let i9f = rect.left;
  let b2k = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let e5c = this.i9v.g1y();

  if (i9f + e5c > viewportWidth)
  {
    i9f = viewportWidth - e5c - 5;
  }
  if (i9f < 5)
  {
    i9f = 5;
  }
  if (b2k + e5c > viewportHeight)
  {
    b2k = viewportHeight - e5c - 5;
  }
  if (b2k < 5)
  {
    b2k = 5;
  }

  let y1h = this.w9b.x0i(i4w);
  let i0f = this.w9b.i0f(y1h);
  tooltip.innerHTML = this.d9i(i0f);

  tooltip.style.left = `${i9f}px`;
  tooltip.style.top = `${b2k}px`;
  tooltip.classList.add('visible');
}

k0r(i4w, event)
{
  if (!this.n9g) return;
  tooltip.classList.remove('visible');
}

d9i(i0f)
{
  let l3v = new h2k();
  const tempCanvas = document.createElement('canvas');
	l3v.m4u = tempCanvas;
	let c7p = this.i9v.g1y();
	l3v.m4u.width = c7p;
	l3v.m4u.height = c7p;
	l3v.i0s(this.i9v);
  l3v.g6z(i0f);
  l3v.u5a();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class j4n
{

constructor()
{
	this.fontSize = 15;
  this.h7l = true;
 	this.x5k = true;
}

p7u()
{
  return Object.assign(new j4n(), this);
}

}
class h7x
{

constructor(c2n)
{
  this.g1j = new j6u(c2n);
  this.e1y = new x9t(c2n);
}

}

class q6f
{

constructor()
{
	this.g0l = false;
	this.i1n = null;
	this.p9x = null;
	this.h4h = 6;
	this.q9h = null;
	this.c5a = null;
	this.j0f = null;
	this.m4g = null;
	this.l0l = null;
	this.t4o = false;
}

z8e()
{
	this.g0l = false;
	this.a2k();
	this.q9h.classList.replace('autoPlay', 'autoStop');
	this.m4g.style.display = 'none';
	this.l0l.style.display = 'none';
	this.c5a.style.display = 'inline-block';
	this.j0f.style.display = 'inline-block';
	this.w8k();
	this.i1n.u4s.y9y = false;
}

i8u()
{
	if (this.p9x)
	{
		clearInterval(this.p9x);
		this.p9x = null;
		this.q9h.classList.replace('autoStop', 'autoPlay');
		this.m4g.style.display = 'inline-block';
		this.l0l.style.display = 'inline-block';
		this.c5a.style.display = 'none';
		this.j0f.style.display = 'none';
		this.i1n.u4s.y9y = true; 
		this.i1n.n1w.e1y.z6d();
	}
}

a2k()
{
	let c2n = this.i1n.c2n;
	this.p9x = setInterval(function(){ b0a(c2n); },
		this.i1n.n1w.e1y.m9j ? this.h4h * 2 : this.h4h * 100);
}

m1r()
{
	return this.p9x != null;
}

d8h()
{
	return !this.i1n.n1w.e1y.o2l();
}

t6t()
{
	return !this.i1n.n1w.e1y.c2f();
}

c5u()
{
	if (this.t4o)
	{
		return;
	}
	else
	{
		this.t4o = true;
	}
	if (!this.t6t())
	{
		this.i8u();
	}
	else
	{
		this.i1n.n1w.e1y.u0d();
	}
	this.t4o = false;
}

c6g()
{
	if (this.p9x)
	{
		if (this.h4h < 50)
		{
			this.h4h++;
			clearInterval(this.p9x);
			this.a2k();
			this.w8k();
		}
	}
}

t4c()
{
	if (this.p9x)
	{
		if (this.h4h > 1)
		{
			this.h4h--;
			clearInterval(this.p9x);
			this.a2k();
			this.w8k();
		}
	}
}

w8k()
{
	m0v(this.c5a, this.h4h < 50);
	m0v(this.j0f, this.h4h > 1);
}

}

let z4j = null;
let n2r = 0;
let s0u = null;

class n6b
{

constructor()
{
	this.index = 0;
	this.n8o = '';
	this.h2o = null;
	this.u9k = false;
	this.i1n = null;
	this.o3c = null;
  this.w7b = [];
	this.x2h = 0;
  this.u6x = 0;

	this.g8o = null;
	this.z0n = null;
	this.left = null;
	this.h6a = null;
	this.q9z = null;
	this.x0r = null;
	this.m7a = null;
	this.w7x = null;
	this.u1l = null;
	this.m0f = null;
	this.k4g = null;
 	this.f2z = null;
 	this.r2s = null;
	this.d1j = null;
	this.m4g = null;
	this.c5a = null;
	this.q9h = null;
	this.l0l = null;
	this.j0f = null;
	this.r9m = null;
 	this.q9y = null;
  this.i6h = null;
	this.y1c = null;
  this.y1a = null;
	this.x3w = null;
	this.z0x = null;
	this.r8a = null;
	this.n4d = null;
	this.h2d = null;
	this.q0l = null;
  this.i9t = null;
  this.u2p = null;
	this.c8k = null;
	this.h8i = null;
	this.h5k = null;
	this.g1e = null;
	this.c8y = null;

	this.q9j = null;
	this.k8f = null;
	this.t9b = null;
	this.r3i = null;

  this.g2k = null;
	this.t8e = null;
	this.a0s = null;
  this.a0l = null;

  this.x5x = null;

  
  this.o3w = null;
  this.a6y = null;
  this.h5g = null;
  this.k2p = null;
  this.j1m = null;
  this.z6t = null;

  
}

h7b(index, h2o, n8o)
{
	this.index = index;
	this.h2o = h2o;
	this.n8o = n8o;
	h2o.innerHTML = '';
	h2o.id = "replay";

  let s = '';
 	s += "<div class=\"rootParent\">";
	s +=   "<div id=\"root" + index + "\" class=\"root\">";

	s +=     "<div id=\"left" + index + "\" class=\"left\">";
	s +=       "<div id=\"leftContainer" + index + "\" class=\"leftContainer\">";
	s +=         "<div id=\"leftNest" + index + "\" class=\"leftNest\">";
	s +=           "<div id=\"leftNorth" + index + "\" class=\"leftNorth\">";
	s +=             "<div id=\"boardHolder" + index + "\" class=\"boardHolder\">";
	s +=               "<div id=\"boardPanel" + index + "\" class=\"boardPanel\">";
	s +=                 "<canvas id=\"boardCanvas" + index + "\" class=\"boardCanvas\"></canvas>";
	s +=               "</div>";
	s +=             "</div>";
	s +=             "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
	s +=               "<div id=\"replayPanel" + index + "\" class=\"replayPanel\">";
	s +=                 "<button id=\"goToBegin" + index + "\" class=\"replayButton goToBegin\" title=\"Go to begin\"></button>";
	s +=                 "<button id=\"playBackward" + index + "\" class=\"replayButton playBackward\" title=\"Play backward\"></button>";
	s +=                 "<button id=\"playSlower" + index + "\" class=\"replayButton playSlower\" title=\"Slower\"></button>";
	s +=                 "<button id=\"autoPlay" + index + "\" class=\"replayButton autoPlay\" title=\"Auto play\"></button>";
	s +=                 "<button id=\"playForward" + index + "\" class=\"replayButton playForward\" title=\"Play forward\"></button>";
	s +=                 "<button id=\"playFaster" + index + "\" class=\"replayButton playFaster\" title=\"Faster\"></button>";
	s +=                 "<button id=\"goToEnd" + index + "\" class=\"replayButton goToEnd\" title=\"Go to end\"></button>";
	s +=                 "<button id=\"flipBoard" + index + "\" class=\"replayButton flipBoard\" title=\"Flip Board\"></button>";
	s +=                 "<button id=\"goToPrevious" + index + "\" class=\"replayButton loadPrevious\" title=\"Load previous game\"></button>";
	s +=                 "<button id=\"goToNext" + index + "\" class=\"replayButton loadNext\" title=\"Load next game\"></button>";
  s +=                 "<button id=\"showGameList" + index + "\" class=\"replayButton gameList\" title=\"Show Game List\"></button>";
	s +=                 "<button id=\"download" + index + "\" class=\"replayButton download\" title=\"Download PDN\"></button>";
	s +=                 "<button id=\"settings" + index + "\" class=\"replayButton settings\" title=\"Settings\"></button>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=       "</div>";
	s +=     "</div>";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "</div>";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "</label>";
  s += "</div>";
  
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "</div>";
  s +=  "</div>";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
  s +=       "</div>";
	s +=     "</div>";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "</table>";
	s +=       "</div>";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "</div>";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "</div>";
  s +=     "</div>";
	s +=   "</div>";
	s += "</div>";

  h2o.innerHTML = s;

	this.g8o = document.getElementById("rootParent"+index);
	this.z0n = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.h6a = document.getElementById("leftContainer"+index);
	this.q9z = document.getElementById("leftNest"+index);
	this.x0r = document.getElementById("leftNorth"+index);
	this.m7a = document.getElementById("boardHolder"+index);
	this.w7x = document.getElementById("boardPanel"+index);
	this.u1l = document.getElementById("boardCanvas"+index);
	this.m0f = document.getElementById("belowBoard"+index);
	this.k4g = document.getElementById("replayPanel"+index);
 	this.f2z = document.getElementById("goToPrevious"+index);
 	this.r2s = document.getElementById("goToNext"+index);
	this.d1j = document.getElementById("goToBegin"+index);
	this.m4g = document.getElementById("playBackward"+index);
	this.c5a = document.getElementById("playSlower"+index);
	this.q9h = document.getElementById("autoPlay"+index);
	this.l0l = document.getElementById("playForward"+index);
	this.j0f = document.getElementById("playFaster"+index);
	this.r9m = document.getElementById("goToEnd"+index);
  this.q9y = document.getElementById("flipBoard"+index);
  this.i6h = document.getElementById("download"+index);
	this.y1c = document.getElementById("showGameList"+index);
  this.y1a = document.getElementById("settings"+index);
	this.x3w = document.getElementById("leftSouth"+index);
	this.z0x = document.getElementById("leftSouthNest"+index);
	this.r8a = document.getElementById("listParent"+index);
	this.n4d = document.getElementById("listHeader"+index);
	this.h2d = document.getElementById("listHeaderTable"+index);
	this.q0l = document.getElementById("listBody"+index);
  this.i9t = document.getElementById("list-button-container"+index);
  this.u2p = document.getElementById("hideGameList"+index);
	this.c8k = document.getElementById("gameList"+index);
	this.h8i = document.getElementById("right"+index);
	this.h5k = document.getElementById("rightNest"+index);
	this.g1e = document.getElementById("rightNorth"+index);
	this.c8y = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.g1e.style.height = "100%";
   	this.c8y.style.display = 'none';
  }

	this.q9j = document.getElementById("nota-container"+index);
  this.q9j.style.fontSize = e5t.fontSize + 'px';
	this.k8f = document.getElementById("nota-header-container"+index);
	this.t9b = document.getElementById("headerPanel"+index);
	this.r3i = document.getElementById("movesPanel"+index);

	this.g2k = document.getElementById("enota-container"+index);
  this.g2k.style.fontSize = e5t.fontSize + 'px';
	this.t8e = document.getElementById("enota-header-container"+index);
	this.a0s = document.getElementById("eheaderPanel"+index);
	this.a0l = document.getElementById("emovesPanel"+index);

  this.x5x = document.getElementById("startEngine"+index);
}

u7z()
{
	this.h2o.style.display = 'block';
	this.c5a.style.display = 'none';
	this.j0f.style.display = 'none';
	this.r8a.style.display = 'none';

	this.u9k = false;
	if (this.h2o.clientWidth <= t5x)
	{
		this.m3k();
		this.u9k = true;
	}
	else
	{
		this.d9k();
		this.r3a();
	}
  this.d8t();
	let c2n = this.index;

	this.d1j.onclick = this.t5b.bind(this);
	this.m4g.onclick = this.i6s.bind(this);
	this.c5a.onclick = this.c6g.bind(this);
	this.q9h.onclick = this.g6w.bind(this);
	this.j0f.onclick = this.t4c.bind(this);
	this.l0l.onclick = this.e2t.bind(this);
	this.r9m.onclick = this.k2h.bind(this);
  this.f2z.onclick = this.j6p.bind(this);
  this.r2s.onclick = this.r6x.bind(this);
  this.q9y.onclick = this.r7p.bind(this);
 	this.i6h.onclick = this.t7n.bind(this);
	this.y1c.onclick = this.e4e.bind(this);
 	this.u2p.onclick = this.y6w.bind(this);

  this.y1a.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.x5x.onchange = this.z0w.bind(this);

	this.i1n = new n5p(this.index);
	this.i1n.u4s.l3v.j4i(this.u1l);
	this.i1n.u4s.w7x = this.w7x;
  this.i1n.u4s.i0s(q6n);
	this.i1n.n1w.g1j.h1u = this.t9b;
	this.i1n.n1w.e1y.f9p = this.r3i;
  this.i1n.n1w.e1y.i0s(q6n);
	this.i1n.v2u.q9h = this.q9h;
	this.i1n.v2u.c5a = this.c5a;
	this.i1n.v2u.j0f = this.j0f;
	this.i1n.v2u.m4g = this.m4g;
	this.i1n.v2u.l0l = this.l0l;
 	this.i1n.m0s.e1y.f9p = this.a0l;
  this.i1n.m0s.e1y.i0s(q6n);

  this.i1n.m0s.y1a.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.o3c = new s3b(this.index);
	this.o3c.r8a = this.r8a;
	this.o3c.c9t = this.c8k;
	this.o3c.c6o = this.h2d;
	this.o3c.u7z();
	this.o3c.m5d(this.w7b);
  this.o3c.f8j = (c8k, index) => {
    this.r4d(c8k, index);
  };
	if (this.o3c.w7b.length)
	{
		this.y6n(0, 0);
	}
	else
	{
		let x2i = new e4m();
		this.i1n.y6n(null, 1, 0, x2i);
	}
}

c9l(n8o)
{
	this.n8o = n8o;
 	let lines = this.n8o.split('\n');
	let t9f = 0;
	for (const l5p of lines)
	{
		if (l5p.startsWith("[Event \""))
		{
			let j8y = t9f;
      let b7r = lines.length;
   		let u9x = lines.slice(j8y, b7r);
  		let v2g = new p0e(u9x);
	  	this.o3c.w7b[this.x2h] = v2g.v1l();
      break;
    }
    t9f++;
	}
  this.y6n(0, 0);
}

d8t()
{
	let lines = this.n8o.split('\n');
	let h5w = [];
	let t9f = 0;
	for (const l5p of lines)
	{
		if (l5p.startsWith("[Event \""))
		{
			h5w.push(t9f);
		}
		t9f++;
	}
	let i = 0;
	this.w7b = [];
	for (const h6r of h5w)
	{
		let j8y = h6r;
		let b7r = 0;
		if (i < h5w.length - 1)
		{
			b7r = h5w[i + 1];
		}
		else
		{
			b7r = lines.length;
		}
		let u9x = lines.slice(j8y, b7r);
		let v2g = new p0e(u9x);
		let x2i = v2g.v1l();
		this.w7b.push(x2i);
		i++;
	}
}

q9d()
{
	if (this.u9k || this.z0n.clientHeight <= t5x)
	{
		this.h2o.style.d2p = "0px";
		this.h2o.style.p3b = "0px";
		this.h2o.style.width = "100%";
		this.h2o.style.height = "88vh";
	}
	else
	{
		this.h2o.style.d2p = "1px solid gray";
		this.h2o.style.p3b = "1px solid gray";
		this.h2o.style.height = "88vh";
	}
}

x8f()
{
	this.q9d();

	this.left.style.width = "100%";

	let z0s = this.x0r.getBoundingClientRect();
	this.x3w.style.top = (z0s.height) + "px";
	this.r3a();

	this.e0h();
	this.d9k();
	this.v9n();
	this.i9j();
  this.n6h()
}

d7y()
{
	this.q9d();

	let c0z = this.z0n.getBoundingClientRect();
	this.left.style.width = (c0z.width * 0.50) + "px";
	let f7u = this.left.getBoundingClientRect();

	let z0s = this.x0r.getBoundingClientRect();
	this.x3w.style.top = (z0s.height) + "px";
	this.r3a();

	this.h8i.style.left = (f7u.width) + "px";
	this.h8i.style.width = (c0z.width - f7u.width) + "px";

	this.e0h();
	this.d9k();
	this.v9n();
	this.i9j();
  this.n6h()
}

d9k()
{
}

c1e()
{
  this.x0r.style.height = '100%';
  this.g1e.appendChild(this.q9j);
  this.q9j.style.height = '100%';
  this.c8y.appendChild(this.g2k);
  if (!chess)
  {
    this.c8y.style.display = 'none';
  }
  else
  {
    this.c8y.style.display = 'block';
    this.g2k.style.height = '100%';
  }
  this.h8i.style.display = 'block';
}

m3k()
{
  this.x0r.style.height = '70%';
  this.z0x.appendChild(this.q9j);
  if (!chess)
  {
    this.q9j.style.height = '100%';
    this.g2k.style.display = 'none';
  }
  else
  {
    this.z0x.appendChild(this.g2k);
    this.q9j.style.height = '50%';
    this.g2k.style.height = '50%';
    this.g2k.style.display = 'block';
  }
  this.h8i.style.display = 'none';
}

e4e(event)
{
	this.r8a.style.display = 'block';
  let c7e = this.r8a.clientHeight - this.n4d.clientHeight - this.i9t.clientHeight;
  this.q0l.style.height = c7e + "px";
	this.v9n();
}

y6w(event)
{
 	this.r8a.style.display = 'none';
}

i9j()
{
	this.i1n.n1w.g1j.x8s();
}

n6h()
{
}

v9n()
{
  this.o3c.v9c();
}

e0h()
{
	let z0s = this.x0r.getBoundingClientRect();
	let w0y = this.m0f.getBoundingClientRect();
	this.m7a.style.height = (z0s.height - w0y.height - 1) + "px";
	this.i1n.u4s.v9c();
}

r3a()
{
	let q5s = this.q9z.getBoundingClientRect();
	let z0s = this.x0r.getBoundingClientRect();
	let d1d = q5s.height - z0s.height;
	if (d1d < 0) d1d = 0;
	this.x3w.style.height = d1d + "px";
}

n7n()
{
  j6d('goToPrevious'+this.index, this.x2h > 0);
  j6d('goToNext'+this.index, this.x2h < this.o3c.w7b.length - 1);
}

v8u(e)
{
	this.i1n.u4s.l3v.mouseDown(e);
}

i5v(e)
{
	this.i1n.u4s.l3v.mouseMove(e);
}

q1x(e)
{
	this.i1n.u4s.l3v.mouseUp(e);
}

w1a(e)
{
	this.i1n.u4s.l3v.touchStart(e);
}

c4w(e)
{
	this.i1n.u4s.l3v.touchMove(e);
}

o5r(e)
{
	this.i1n.u4s.l3v.touchEnd(e);
}

c6g(event)
{
	this.i1n.v2u.c6g();
}

t4c(event)
{
	this.i1n.v2u.t4c();
}

i6s(event)
{
	this.i1n.v2u.i8u();
	this.i1n.n1w.e1y.i6s();
}

e2t(event)
{
	this.i1n.v2u.i8u();
	this.i1n.n1w.e1y.e2t();
}

t5b(event)
{
	this.i1n.v2u.i8u();
	this.i1n.n1w.e1y.w3m();
}

k2h(event)
{
	this.i1n.v2u.i8u();
	this.i1n.n1w.e1y.d7u();
}

g6w(event)
{
	this.i1n.k6s();
}

a2x()
{
 	if (this.o3c.w7b.length)
  {
    this.y6n(0, 0);
  }
}

j6p(event)
{
 	if (this.x2h > 0)
  {
    this.y6n(this.x2h - 1, 0);
  }
}

r6x(event)
{
  if (this.x2h < this.o3c.w7b.length - 1)
  {
    this.y6n(this.x2h + 1, 0);
  }
}

t0u()
{
	if (this.o3c.w7b.length)
  {
    this.x2h = this.o3c.w7b.length - 1;
    this.y6n(this.o3c.w7b.length - 1, 0);
	}
}

y6n(x2h, i4w)
{
  if (x2h >= 0 && x2h <= this.o3c.w7b.length - 1)
  {
    this.x2h = x2h;
  	this.i1n.y6n(null, 1, i4w, this.o3c.w7b[this.x2h]);
  }
  this.n7n();
}

r7p(event)
{
	this.i1n.r7p();
}

o4x()
{
	this.i1n.o4x();
}

d2m()
{
	if (this.h2o.clientWidth <= t5x)
	{
		if (this.u9k)
		{
			this.x8f();
		}
		else
		{
			this.m3k();
			this.u9k = true;
			this.x8f();
		}
	}
	else
	{
		if (!this.u9k)
		{
			this.d7y();
		}
		else
		{
			this.c1e();
			this.u9k = false;
			this.d7y();
		}
	}
}

r4d(c8k, index)
{
	this.y6n(index, 0);
  this.y6w();
}

t7n(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.n8o.length - 1)
  {
    if (this.n8o[i] == '[')
    {
        break;
    }
    i++;
  }
  let n8o = this.n8o.substring(i);
  a.href = window.URL.createObjectURL(new Blob([n8o], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

z0w(event)
{
  if (chess)
  {
    if (this.i1n.b7z())
    {
      this.m7k();
    }
    else
    {
      this.l6a();
    }
  }
}

m7k()
{
  this.i1n.m7k();
}

l6a()
{
  let j5u = new w0v();
  j5u.id.g2o = "Stockfish";
  const e3m = j5u.e3m;
  e3m.addInteger("MultiPV", a3y);
  e3m.addInteger("Threads", a8m);
  e3m.addInteger("Hash",    e7m(h4p));
  this.i1n.l6a(j5u);
}

e0o()
{
  this.i1n.u4s.i0s(q6n);
  this.i1n.u4s.v9c();
  this.i1n.n1w.e1y.i0s(q6n);
  this.i1n.n1w.e1y.h7q();
  this.i1n.m0s.e1y.i0s(q6n);
  this.i1n.m0s.e1y.h7q();
  let q9j = document.getElementById("nota-container"+this.index);
  q9j.style.fontSize = e5t.fontSize + 'px';
  let m7p = document.getElementById("enota-container"+this.index);
  m7p.style.fontSize = e5t.fontSize + 'px';
}

u3o()
{
  if (this.i1n.b7z())
  {
    this.m7k();
    this.l6a();
  }
}

async onSettingsClick()
{
  const dialog = new h0r();
  const { t3j } = await dialog.show();

  if (t3j === dialog.r4p)
  {
    this.e0o();
  }
}

async onEngineSettingsClick()
{
  const dialog = new a3i();
  const { t3j } = await dialog.show();

  if (t3j === dialog.r4p)
  {
    this.u3o();
  }
}

}

class h0r
{

constructor()
{
  this.r4p = 1;
  this.d1v = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.d0q();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.a6y = this.dialog.querySelector(".piece-select");
  this.h5g = this.dialog.querySelector(".coordinates-checkbox");
  this.k2p = this.dialog.querySelector(".font-select");
  this.j1m = this.dialog.querySelector(".ok-button");
  this.z6t = this.dialog.querySelector(".cancel-button");

  this.j1m.onclick = this.w3t.bind(this);
 	this.z6t.onclick = this.f2t.bind(this);
}

d0q()
{
  const u1b = d1y();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <c3p>Settings</c3p>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${u1b.map((n2f, i) => '<option value="' + i + '">' + n2f + '</option>').join('')}
        </select>
      </div>

      <div class="settings-row">
        <span class="label-text">Coordinates:</span>
        <input type="checkbox" class="coordinates-checkbox">
      </div>

      <div class="settings-row">
        <span class="label-text">Notation font size:</span>
        <select class="movesFontSizeSelect font-select">
          <option value="12">Small</option>
          <option value="15">Default</option>
          <option value="18">Medium</option>
          <option value="22">Large</option>
        </select>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

w3t(event)
{
  q6n.g4z = this.a6y.value;
  localStorage.setItem(i1d, q6n.g4z);
  k1o(q6n.g4z);
  q6n.g0d = this.h5g.checked;
  localStorage.setItem(s0l, q6n.g0d.toString());
  e5t.fontSize = this.k2p.value;
  localStorage.setItem(s7i, e5t.fontSize);
  this.dialog.close('ok');
}

f2t(event)
{
  this.dialog.close('cancel');
}

async show()
{
  a9v = true;

  this.a6y.value = q6n.g4z;
  this.h5g.checked = q6n.g0d;
  this.k2p.value = e5t.fontSize;

  const t3j = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.r4p : this.d1v);
    };
    this.dialog.showModal();
  });

  a9v = false;
  return { t3j };
}

}

function c5x(a8n)
{
  const value = parseInt(a8n);
  const timeMap = {
    1: 2000,   
    2: 4000,   
    3: 6000,   
    4: 8000,   
    5: 10000,  
    6: 12000,  
    7: 15000,  
    8: 20000,  
    9: 30000,  
    10: 0      
  };
  return timeMap[value] || 2000; 
}

function e7m(a8n)
{
  const value = parseInt(a8n);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[value] || 16;
}

class a3i
{

constructor()
{
  this.r4p = 1;
  this.d1v = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.d0q();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.o3g = this.dialog.querySelector(".searchTime-slider");

  this.m2j = this.dialog.querySelector(".searchTime-value");
  this.y7v = this.dialog.querySelector(".multiPV-slider");
  this.r7s = this.dialog.querySelector(".multiPV-value");
  this.r5w = this.dialog.querySelector(".threads-slider");
  this.u4e = this.dialog.querySelector(".threads-value");
  this.s6w = this.dialog.querySelector(".memory-slider");
  this.e8q = this.dialog.querySelector(".memory-value");
  this.j1m = this.dialog.querySelector(".ok-button");
  this.z6t = this.dialog.querySelector(".cancel-button");

  this.j1m.onclick = this.w3t.bind(this);
 	this.z6t.onclick = this.f2t.bind(this);

  this.o3g.addEventListener('input', this.e4f.bind(this));
  this.y7v.addEventListener('input', this.y3f.bind(this));

  this.r5w.addEventListener('input', this.l3k.bind(this));

  this.s6w.addEventListener('input', this.h6t.bind(this));

}

d0q() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <c3p>Engine Settings</c3p>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" b6d="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" b6d="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" b6d="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" b6d="1" value="1">
        <span class="value-display-simple memory-value">16MB</span>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

w3t(event)

{
  o4k = parseInt(this.o3g.value);
  a3y = parseInt(this.y7v.value);
  a8m = parseInt(this.r5w.value);
  h4p = parseInt(this.s6w.value);
  localStorage.setItem(t2n, o4k);
  localStorage.setItem(j0y, a3y);
  localStorage.setItem(p8b, a8m);
  localStorage.setItem(c4c, h4p);
  this.dialog.close('ok');
}

f2t(event)
{
  this.dialog.close('cancel');
}

e4f()
{
  const value = parseInt(this.o3g.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "2s"; break;
    case 2: displayValue = "4s"; break;
    case 3: displayValue = "6s"; break;
    case 4: displayValue = "8s"; break;
    case 5: displayValue = "10s"; break;
    case 6: displayValue = "12s"; break;
    case 7: displayValue = "15s"; break;
    case 8: displayValue = "20s"; break;
    case 9: displayValue = "30s"; break;
    case 10: displayValue = "\u221E"; break;
    default: displayValue = "";
  }
  this.m2j.textContent = displayValue;
}

y3f()
{
  const value = this.y7v.value;
  this.r7s.textContent = `${value}`;
}


l3k()
{
  const value = this.r5w.value;
  this.u4e.textContent = `${value}`;
}


h6t()

{
  const value = parseInt(this.s6w.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "16MB"; break;
    case 2: displayValue = "32MB"; break;
    case 3: displayValue = "64MB"; break;
    case 4: displayValue = "128MB"; break;
    case 5: displayValue = "256MB"; break;
    case 6: displayValue = "512MB"; break;
    default: displayValue = "";
  }

  this.e8q.textContent = displayValue;
}

async show()
{
  a9v = true;

  this.o3g.value = o4k;
  this.y7v.value = a3y;
  this.r5w.value = a8m;
  this.s6w.value = h4p;

  this.e4f();
  this.y3f();
  this.l3k();
  this.h6t();

  const t3j = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.r4p : this.d1v);
    };
    this.dialog.showModal();
  });

  a9v = false;
  return { t3j };
}

}

const m2r = 38;
const y0c = 40;
const o2m = 37;
const c7h = 37;
const g8m = 52;
const x6v = 39;
const n3l = 39;
const a2z = 54;
const a8s = 36;
const m6f = 36;
const p6u = 55;
const e8a = 35;
const c8o = 35;
const u6p = 49;
const d2z = 187;
const f3n = 107;
const u5k = 61;
const k7z = 42;
const s3f = 170;
const e2k = 8;
const d3y = 13;
let r3j = false;
let a9v = false;

const t5x = 767;
let r0e = [];
let o5d = -1;
let n0f = new m3w();

let q6n = new l2d();
let e5t = new j4n();
let o4k = 1;
let a3y = 1;
let a8m = 1;
let h4p = 1;

window.onload = function()
{
  g0n();
  s2e();
  t5l();
};

document.onkeydown = d7m;

function d7m(e)
{
  if (e.v8w === "Escape")
  {
    return;
  }

  if (a9v)
  {
    
    e.preventDefault();
    return;
  }

	let c9z = e || window.event;
	let v8w = c9z.keyCode;

	if (r3j) return;
	r3j = true;

	if (o5d == -1) return;

	if (e.ctrlKey)
	{
		if (v8w == 66) 
		{
				r0e[o5d].r7p();
				e.preventDefault();
				
				
				
		}
		r3j = false;
		return;
	}
	if (v8w)
	{
		
		o9v(v8w);
		e.preventDefault(); 
		
	}
	r3j = false;
}

function b0a(c2n)
{
	r0e[c2n].i1n.v2u.c5u();
}

function o9v(v8w)
{
	if (o5d == -1) return;

	if (v8w == m2r)
	{
		r0e[o5d].i1n.n1w.e1y.u2m();
	}
	else if (v8w == y0c)
	{
		r0e[o5d].i1n.n1w.e1y.l4l();
	}
	else if (v8w == o2m || v8w == c7h || v8w == g8m ||
	v8w == x6v || v8w == n3l || v8w == a2z ||
	v8w == a8s || v8w == m6f ||
	v8w == e8a || v8w == c8o)
	{
		r0e[o5d].i1n.n1w.e1y.q7j(v8w);
	}
	else if (v8w == d2z || v8w == f3n || v8w == u5k)
	{
		r0e[o5d].doFlipBoard();
	}
}

function n4q(a6h, f4w)
{
	let i2x = a6h.length;
	let l5z = 0;

	function check(n)
	{
		if (n == i2x)
		{
			f4w();
		}
	}

	for (let i = 0; i < a6h.length; ++i)
	{
    let p1b = a6h[i];
		let img = document.createElement("img");
		img.id = a6h[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		n0f.add(img);
		img.addEventListener("load", function()
		{
			l5z++;
			check(l5z);
		});
		img.src = p1b;
	}
}

function g0n()
{
 	n4q(l4o(), y0m);
  
  
}

function d2m()
{
	for (const i1i of r0e)
	{
		i1i.d2m();
	}
}

function y0m()
{
	let l2o = document.getElementsByClassName("tdreplay");
	for (const h2o of l2o)
	{
		let i1i = new n6b();
		i1i.h7b(r0e.length, h2o, h2o.innerHTML);
		i1i.u7z();
		r0e.push(i1i);
	}
	if (r0e.length)
	{
		o5d = 0;
	}
	window.addEventListener("resize", d2m);
	d2m();
}

function j6d(g2o, t0o)
{
	let button = document.getElementById(g2o);
	if (t0o)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function m0v(button, t0o)
{
	if (t0o)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const s0l = 'Coordinates';
const i1d = 'Pieces';
const s7i = 'MovesFontSize';
const t2n = 'SearchTime';
const j0y = 'MultiPV';
const p8b = 'Threads';
const c4c = 'Memory';

function t5l()
{
  const coordinatesValue = localStorage.getItem(s0l);
  if (coordinatesValue === null)
  {
    q6n.g0d = true;
  }
  else
  {
    q6n.g0d = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(i1d);
  if (piecesValue === null)
  {
    q6n.g4z = 0;
  }
  else
  {
    q6n.g4z = piecesValue;
  }
  k1o(q6n.g4z);

  const movesFontSizeValue = localStorage.getItem(s7i);
  if (movesFontSizeValue === null)
  {
    e5t.fontSize = 15;
  }
  else
  {
    e5t.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(t2n);
  if (searchTime === null)
  {
    o4k = 10; 
  }
  else
  {
    o4k = searchTime;
  }
  const p4f = localStorage.getItem(j0y);
  if (p4f === null)
  {
    a3y = 1;
  }
  else
  {
    a3y = p4f;
  }
  const threads = localStorage.getItem(p8b);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    a8m = defaultThreads;
  }
  else
  {
    a8m = threads;
  }
  const memory = localStorage.getItem(c4c);
  if (memory === null)
  {
    h4p = 4; 
  }
  else
  {
    h4p = memory;
  }
}
const g2c =
[
	[ o0s.m7l, 			  	""      ],
	[ o0s.x2i,  		 		"game"  ],
	[ o0s.f8x,    		 	"match" ],
	[ o0s.z7m,  	"tourn" ],
	[ o0s.c0k,   			"swiss" ],
	[ o0s.o2h,    	"k.o."  ],
	[ o0s.s2n,	"simul" ],
	[ o0s.b9p,	"schev" ]
];

const r8m =
[
	[ b2o.w2t, ""        ],
	[ b2o.c0l,  "(rapid)" ],
	[ b2o.g3k,  "(blitz)" ],
	[ b2o.h4m,   "(corr)"  ]
];

const s8w =
[
	[ n3d.m7l,     		 ""     ],
	[ n3d.m9y,       		 "$145" ],
	[ n3d.k1j, 		 "$142" ],
	[ n3d.c5b, 		 "$143" ],
	[ n3d.x4n, "$144" ],
	[ n3d.o4o,  "$140" ],
	[ n3d.l3f, "$141" ]
];

const w0d =
[
	[ h3e.m7l,     		""   ],
	[ h3e.l0e,       	"$1" ],
	[ h3e.l1r, 			  	"$2" ],
	[ h3e.k9q,	"$5" ],
	[ h3e.x2u, 		  "$6" ],
	[ h3e.s9r,  	"$3" ],
	[ h3e.o0q, 		  "$4" ],
	[ h3e.o7h, 		"$22" ],
	[ h3e.t8z, 		"$8" ]
];

const l6e =
[
	[ z3q.m7l,     						""     ],
	[ z3q.u0p,      "$18"  ],
	[ z3q.e3y, 					"$16"  ],
	[ z3q.c7g,	"$14"  ],
	[ z3q.g7r, 						"$11"  ],
	[ z3q.h8l,  						"$13"  ],
	[ z3q.x8m,  "$15"  ],
	[ z3q.j6y, 					"$17"  ],
	[ z3q.j1a, 			"$19"  ],
	[ z3q.l3d,					"$44"  ],
	[ z3q.c3b, 					"$132" ],
	[ z3q.y1r,  					"$36"  ],
	[ z3q.f8u, 							"$40"  ],
	[ z3q.w5m, 			  "$138" ],
	[ z3q.f3l,	"$32"  ],
	[ z3q.d5h, 							"$146" ]
];

const m6n =
[
	[ s5r.m7l,     		""     ],
	[ s5r.l7q,     "$51"  ],
	[ s5r.q4m, 			"$52"  ],
	[ s5r.s2a,	    		"$53"  ]
];

const o2k =
[
	[ y5u.n0k, 			 	""       ],
	[ y5u.q4m,   		"middle" ],
	[ y5u.q5g,   	   	 	"low"    ]
];


function y8c(r9e)
{
	return r8m[r9e][1];
}

function p0u(y5j)
{
	for (const r9e of r8m)
	{
		if (r9e[1] == y5j)
		{
			return r9e[0];
		}
	}
	return b2o.w2t;
}

function x8a(type)
{
	return g2c[type][1];
}

function j4h(y5j)
{
	for (const y6q of g2c)
	{
		if (y6q[1] == y5j)
		{
			return y6q[0];
		}
	}
	return o0s.m7l;
}

function n3w(e7j)
{
	return s8w[e7j][1];
}

function p1s(y5j)
{
	for (const e7j of s8w)
	{
		if (e7j[1] == y5j)
		{
			return e7j[0];
		}
	}
	return n3d.m7l;
}

function z7l(style)
{
	return w0d[style][1];
}

function u1i(y5j)
{
	for (const style of w0d)
	{
		if (style[1] == y5j)
		{
			return style[0];
		}
	}
	return h3e.m7l;
}

function b7c(value)
{
	return l6e[value][1];
}

function y8s(y5j)
{
	for (const value of l6e)
	{
		if (value[1] == y5j)
		{
			return value[0];
		}
	}
	return z3q.m7l;
}

function f0j(v5n)
{
	return m6n[v5n][1];
}

function z6x(y5j)
{
	for (const w5t of m6n)
	{
		if (w5t[1] == y5j)
		{
			return w5t[0];
		}
	}
	return s5r.m7l;
}

function c7j(y5j)
{
	return y5j.length == 0 ||
		y5j == "?" ||
		y5j == "-" ||
		y5j == "*" ||
		y5j == "????.??.??";
}

function j6r(y5j)
{
	if (c7j(y5j))
	{
		return "";
	}
	else
	{
		return y5j.trim();
	}
}

function q6d(y5j, g5j)
{
	if (c7j(y5j))
	{
		return g5j;
	}
	else
	{
		return q8h(y5j, g5j);
	}
}

function l5t(value)
{
	return value ? value.toString() : "";
}

function q0f(z8m)
{
	return o2k[z8m][1];
}

function r4v(y5j)
{
	for (const z8m of o2k)
	{
		if (z8m[1] == y5j)
		{
			return z8m[0];
		}
	}
	return y5u.n0k;
}

function a1x(l8b)
{
	if (!l8b)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(l8b / 60);
		let u7y = l8b % 60;
		return div.toString() + "." + u7y.toString().padStart(2, '0');
	}
}

function r8b(t3j)
{
	switch (t3j)
	{
		case c7i.m2k:
			return "1-0";
		case c7i.u5a:
			return "1/2-1/2";
		case c7i.l2v:
			return "0-1";
		default:
			return "*";
	}
}

function o0b(d7n)
{
	if (d7n > 0 && d7n <= 9999)
	{
		return d7n.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function n7k(k6v)
{
	if (k6v.y5h())
	{
		return "????.??.??";
	}
	let y5j = '';
	if (k6v.s1c)
	{
		y5j = k6v.s1c.toString().padStart(4, '0');
	}
	else
	{
		y5j = "????";
	}
	y5j += ".";
	if (k6v.i3c)
	{
		let n6n = k6v.i3c.toString().padStart(2, '0');
		y5j += n6n;
	}
	else
	{
		y5j += "??";
	}
	y5j += ".";
	if (k6v.z0k)
	{
		let c5r = k6v.z0k.toString().padStart(2, '0');;
		y5j += c5r;
	}
	else
	{
		y5j += "??";
	}
	return y5j;
}

function v6t(c3l)
{
	if (c7j(c3l))
	{
		return new u7f();
	}
	else
	{
		let k6v = new u7f();
		k6v.a0e("yyyy.mm.dd", c3l);
		return k6v;
	}
}

function i0q(c3l, z7m)
{
	z7m.i4v = (c3l.indexOf("team") != -1);
	z7m.type = o0s.m7l;
	for (const y6q of g2c)
	{
		if (c3l.indexOf(y6q[1]) != -1)
		{
			z7m.type = y6q[0];
			break;
		}
	}
	z7m.r9e = b2o.w2t;
	for (const r9e of r8m)
	{
		if (c3l.indexOf(r9e[1]) != -1)
		{
			z7m.r9e = r9e[0];
			break;
		}
	}
}

function i4h(c3l, z2u)
{
	z2u.e3i = 0;
	z2u.j9q = 0;
	let y1h = c3l.indexOf(".");
	if (y1h != -1)
	{
		let e3x = c3l.substr(0, y1h);
		z2u.e3i = q8h(e3x, 0);
		let c3a = c3l.substr(y1h + 1, c3l.length);
		y1h = c3a.indexOf(".");
		if (y1h != -1)
		{
			e3x = c3a.substr(0, y1h);
			z2u.j9q = q8h(e3x, 0);
		}
		else
		{
			z2u.j9q = q8h(c3a, 0);
		}
	}
	else
	{
		z2u.e3i = q8h(c3l, 0);
	}
}

function b9h(z2u)
{
	let c3l = '';
	if (z2u.j9q)
	{
		c3l = z2u.e3i.toString() + "." + z2u.j9q.toString();
	}
	else if (z2u.e3i)
	{
		c3l = z2u.e3i.toString();
	}
	return c3l;
}

function a9c(c3l)
{
	if (c3l == "2-0" || c3l == "20" || c3l == "1-0" || c3l == "10")
	{
		return c7i.m2k;
	}
	else if (c3l == "1-1" || c3l == "11" || c3l == "1/2-1/2" ||
		c3l == "1/21/2" || c3l == "0.5-0.5")
	{
		return c7i.u5a;
	}
	else if (c3l == "0-2" || c3l == "02" || c3l == "0-1" || c3l == "01")
	{
		return c7i.l2v;
	}
	else
	{
		return c7i.m7l;
	}
}

function j2k(c3l)
{
	return q8h(c3l, 0);
}

function y2p(c3l)
{
	return i7r(c3l);
}

function u8q(c3l)
{
	return n0j(c3l);
}

function m3j(value)
{
	return value ? "1" : "";
}

function c3d(c3l)
{
	return c3l == "1";
}

function v7k(o5u)
{
	let z2u = new h0h();

	
	z2u.v6r.l3s.l3t(j6r(o5u.y0q));
	if (!c7j(o5u.z0u))
	{
		z2u.v6r.b3p.g2o = j6r(o5u.z0u);
		z2u.v6r.b3p.w7f = q6d(o5u.q4g, 0);
		if (!c7j(o5u.f4u))
		{
			let k6v = v6t(o5u.f4u);
			z2u.v6r.b3p.s1c = k6v.s1c;
		}
		z2u.v6r.b3p.w1e = c3d(o5u.m5m);
		z2u.v6r.b3p.c8q = h7v(j6r(o5u.w7u));
	}
	z2u.v6r.d7n = j2k(j6r(o5u.v5b));
	z2u.v6r.time = u8q(j6r(o5u.e2f));
	z2u.v6r.j4r = j6r(o5u.g3j);
	z2u.v6r.c8q = s8u(j6r(o5u.r6s));

	
	z2u.u1f.l3s.l3t(j6r(o5u.a3w));
	if (!c7j(o5u.w3x))
	{
		z2u.u1f.b3p.g2o = j6r(o5u.w3x);
		z2u.u1f.b3p.w7f = q6d(o5u.u8x, 0);
		if (!c7j(o5u.o5g))
		{
			let k6v = v6t(o5u.o5g);
			z2u.u1f.b3p.s1c = k6v.s1c;
		}
		z2u.u1f.b3p.w1e = c3d(o5u.l6w);
		z2u.u1f.b3p.c8q = h7v(j6r(o5u.u4r));
	}
	z2u.u1f.d7n = j2k(j6r(o5u.w1l));
	z2u.u1f.time = u8q(j6r(o5u.c8v));
	z2u.u1f.j4r = j6r(o5u.p3a);
	z2u.u1f.c8q = s8u(j6r(o5u.g6f));

	
	z2u.z7m.j4r = j6r(o5u.d9o);
	z2u.z7m.a6z = j6r(o5u.n9i);
	z2u.z7m.j5j = v6t(o5u.p8f);
	z2u.z7m.k1u = v6t(o5u.i3n);

	i0q(j6r(o5u.y6q), z2u.z7m);
	
	
	
	let r5k = p0u(o5u.r5k);
	if (r5k != b2o.w2t)
	{
		z2u.z7m.r9e = r5k;
	}
	z2u.z7m.c8q = h7v(j6r(o5u.c2s));
	z2u.z7m.g7u = q6d(o5u.h3w, 0);
	let y6q = j4h(o5u.y6q);
	if (y6q != o0s.m7l)
	{
		z2u.z7m.type= y6q;
	}
	z2u.z7m.e3z = q6d(o5u.s5e, 0);
	z2u.z7m.i4v = c3d(o5u.r5i);
	z2u.z7m.i2w = c3d(o5u.r0n);
	z2u.z7m.e4g = c3d(o5u.c7a);
	z2u.z7m.q1y = c3d(o5u.c5w);

	
	z2u.l8k.g2o = j6r(o5u.l8k);

	
	z2u.y6o.j4r = j6r(o5u.m0n);
	z2u.y6o.q0o = j6r(o5u.k6p);
	z2u.y6o.d3e = v6t(o5u.b3q);
	z2u.y6o.l2m = q6d(o5u.o7a, 0);
	z2u.y6o.f2v = v6t(o5u.i2r);
	z2u.y6o.z8m = r4v(o5u.g8j);

	
	z2u.j4r.j4r = j6r(o5u.j4r);

	
	z2u.k6v = v6t(o5u.k6v);
	z2u.t3j = a9c(j6r(o5u.t3j));
	z2u.j5w = y2p(j6r(o5u.j5w));
	i4h(j6r(o5u.e3i), z2u);

	
	let o4g = q6d(o5u.o4g, 0);
	z2u.o4g.j3b(o4g);

  
  z2u.id.a6w = o5u.a6w;

	return z2u;
}

function e9y(z2u)
{
	let o5u = new s3w();

	
	o5u.y0q = z2u.v6r.l3s.g2o();
	if (z2u.v6r.b3p.g2o.length)
	{
		o5u.z0u = z2u.v6r.b3p.g2o;
		if (z2u.v6r.b3p.w7f)
		{
			o5u.q4g = z2u.v6r.b3p.w7f;
		}
		if (z2u.v6r.b3p.s1c)
		{
			let w4d = new u7f();
			w4d.s1c = z2u.v6r.b3p.s1c;
			o5u.f4u = n7k(w4d);
		}
		if (z2u.v6r.b3p.w1e)
		{
			o5u.m5m = m3j(z2u.v6r.b3p.w1e);
		}
		if (z2u.v6r.b3p.c8q != q4y.m7l)
		{
			o5u.w7u = q0v(z2u.v6r.b3p.c8q);
		}
	}
	o5u.v5b = o0b(z2u.v6r.d7n);
	o5u.e2f = a1x(z2u.v6r.time);
	o5u.g3j = z2u.v6r.j4r;

	
	o5u.a3w = z2u.u1f.l3s.g2o();
	if (z2u.u1f.b3p.g2o.length)
	{
		o5u.w3x = z2u.u1f.b3p.g2o;
		if (z2u.u1f.b3p.w7f)
		{
			o5u.u8x = z2u.u1f.b3p.w7f;
		}
		if (z2u.u1f.b3p.s1c)
		{
			let m4n = new u7f();
			m4n.s1c = z2u.u1f.b3p.s1c;
			o5u.o5g = n7k(m4n);
		}
		if (z2u.u1f.b3p.w1e)
		{
			o5u.l6w = m3j(z2u.u1f.b3p.w1e);
		}
		if (z2u.u1f.b3p.c8q != q4y.m7l)
		{
			o5u.u4r = q0v(z2u.u1f.b3p.c8q);
		}
	}
	o5u.w1l = o0b(z2u.u1f.d7n);
	o5u.c8v = a1x(z2u.u1f.time);
	o5u.p3a = z2u.u1f.j4r;

	
	o5u.d9o = z2u.z7m.j4r;
	o5u.n9i = z2u.z7m.a6z;
	o5u.p8f = n7k(z2u.z7m.j5j);
	o5u.i3n = n7k(z2u.z7m.k1u);
	o5u.r5k = y8c(z2u.z7m.r9e);
	o5u.h3w = l5t(z2u.z7m.g7u);
	o5u.c2s = q0v(z2u.z7m.c8q);
	o5u.y6q = x8a(z2u.z7m.type);
	o5u.s5e = l5t(z2u.z7m.e3z);
	o5u.r5i = m3j(z2u.z7m.i4v);
	o5u.r0n = m3j(z2u.z7m.i2w);
	o5u.c7a = m3j(z2u.z7m.e4g);
	o5u.c5w = m3j(z2u.z7m.q1y);

	
	o5u.l8k = z2u.l8k.g2o;

	
	o5u.m0n = z2u.y6o.j4r;
	o5u.k6p = z2u.y6o.q0o;
	o5u.b3q = n7k(z2u.y6o.d3e);
	o5u.o7a = l5t(z2u.y6o.l2m);
	o5u.i2r = n7k(z2u.y6o.f2v);
	o5u.g8j = q0f(z2u.y6o.z8m);

	
	o5u.j4r = z2u.j4r.j4r;

	
	o5u.k6v = n7k(z2u.k6v);
	o5u.t3j = r8b(z2u.t3j);
	o5u.j5w = t1r(z2u.j5w);
	o5u.e3i = b9h(z2u);

	
	o5u.o4g = l5t(z2u.o4g.c7d());

	return o5u;
}

const m0m  					= "White";
const q1d					= "WhiteTeam";
const a4n 				= "WhiteTeamNumber";
const q6q 					= "WhiteTeamYear";
const v0o 				= "WhiteTeamSeason";
const u2b 			= "WhiteTeamCountry";
const t5c 						= "WhiteRating";
const k9o 							= "WhiteTime";
const h7e 							= "WhiteElo";
const q6h  						= "WhiteTitle";
const g8h						= "WhiteCountry";

const c4p						= "Black";
const p4t					= "BlackTeam";
const a6v 				= "BlackTeamNumber";
const r9d 					= "BlackTeamYear";
const i9g 				= "BlackTeamSeason";
const q4r 			= "BlackTeamCountry";
const f0w 						= "BlackRating";
const f8t 							= "BlackTime";
const e7i 							= "BlackElo";
const j4f  						= "BlackTitle";
const k3m						= "BlackCountry";

const k8m 				= "Event";
const r7k				= "Site";
const g2e 			 	= "EventDate";
const q5c 		 	= "EventEndDate";
const m1b 			 	= "EventSpeed";
const x8d 	 	= "EventCategory";
const f5y 		 	= "EventCountry";
const q4i 			 	= "EventType";
const e8f 		 	= "EventRounds";
const h2t 			 	= "EventTeams";
const s1j		 	= "EventComplete";
const t5d 	= "EventThreePoints";
const s4e	= "EventBoardPoints";

const s3t 							= "Annotator";

const s5k 				 		= "SourceTitle";
const c8n 				 		= "Publication";
const g4p		 		= "SourcePublisher";
const r3c		 		= "PublicationDate";
const p9u 				 		= "SourceDate";
const u1p 		= "SourceVersionNumber";
const d1b 	 		= "SourceVersionDate";
const l7a 			 		= "SourceQuality";

const d1h 					 		    = "Title";

const f0r 							 		= "Date";
const r0p 								= "Result";
const r6p 										= "ECO";
const v7w 									= "Round";

const p5d			 							= "Tags";

const g8a 									= "Setup";
const u3a 										= "FEN";
const p0h 							= "PlyCount";

const w1w      							= "GUID";

const q4d = "(";
const g1x   = ")";
const e3g    = "{";

class a3c
{

constructor()
{
  this.y8e = new o9p();
  this.j1g = new h4e();
  this.w7v = new k1v();
  this.t6o = false;
  this.b6h = false;
  this.m5c = false;
  this.d0i = '';
}

}

class p0e
{

constructor(lines)
{
	this.k5e = new s3w();
	this.o5c = lines;
	this.u9n = 0;
	this.w1b = '';
	this.e6s = 0;
	this.a0r = 0;
	this.r7l = '';
	this.l2k = 0;
	this.a1y = false;
	this.b3h = '';
	this.y9p = '';
	this.w9b = null;
	this.d7c = new x3i();
	this.v5p = '';
	this.w9y = false;
 	this.z5s = false;
	this.g6g = false;
}

v1l()
{
  this.l2k = 0;
	let x2i = new e4m();
	this.w9b = x2i.t0d;
	try
	{
		this.k1z();
	}
	catch (err)
	{
	}
	x2i.v3u = v7k(this.k5e);
  x2i.u8u = this.l2k;
	return x2i;
}

k1z()
{
	this.a1y = false;
	this.u8a();
	if (this.a1y)
	{
		this.b1y = j9k(this.y9p);
		this.w9b.g6z(this.b1y, 1);
	}
 	this.j2v();
}

h9i()
{
	if (this.o5c.length == 0)
	{
		return false;
	}
	if (this.u9n >= this.o5c.length)
	{
		return false;
	}
	else
	{
		this.w1b = this.o5c[this.u9n];
		this.e6s = this.w1b.length;
		this.a0r = 0;
		this.u9n++;
		return true;
	}
}

u8a()
{
	this.g6g = false;
	this.z5s = false;
	while (true)
	{
		if (!this.h9i())
		{
			return;
		}
		this.w2h();
		if (!this.u3n())
		{
			return;
		}
		this.b4r();
	}
}


i9p(o6y)
{
	let c3l = this.r7l.substr(1, this.r7l.length - 1);
	return c3l.toUpperCase() === o6y.toUpperCase();
}

j2v()
{
 	if (this.r7l.length == 0) return;
	this.w9y = false;

	while (this.r7l[0] == '{')
	{
		let h7m = this.t5y();
    let g5m = new a3c();
		this.u4j(h7m, g5m);
    if (!g5m.y8e.y5h())
		{
			this.w9b.b6c(g5m.y8e);
		}
 		if (!g5m.j1g.y5h())
		{
			this.w9b.r2e(g5m.j1g);
		}
		if (!g5m.w7v.y5h())
		{
			this.w9b.m4j(g5m.w7v);
		}
 		h7m = g5m.d0i.trim();
    if (h7m.length)
    {
      
      
      if (h7m.startsWith("[%a") && h7m.length > 7)
      {
        h7m = h7m.substr(7, h7m.length).trim();
      }
      let s0x = this.w9b.s0x();
      if (s0x.length)
      {
        s0x += ' ';
      }
      s0x += h7m;
      this.w9b.i2c(s0x);
		}
		this.w2h();
		if (this.r7l.length == 0)
		{
			return;
		}
	}
	this.e5o(this.w9b.c1v(), this.w9b.b1y());
}

e5o(d2a, s0q)
{
  let y1h = d2a.p7u();
  let i0f = s0q.p7u();

	let a4g = null;
 	let o8q = new b0t();

	do
	{
		if (this.r7l == q4d)
		{
			if (!a4g)
			{
				throw "error";
			}
			if (!this.w2h())
			{
				throw "error";
			}

 			i0f.j1b(y1h.h9q.r8w());
			i0f.p4a(o8q);
			this.w9b.j1b(y1h); 
      this.e5o(y1h, i0f);
			this.w9b.w8y(y1h); 
			i0f.w8y(y1h.h9q.r8w());

			while (this.w2h())
			{
				if (this.r7l != q4d)
				{
					break;
				}
				if (!this.w2h())
				{
					throw "error";
				}
        i0f.j1b(y1h.h9q.r8w());
				i0f.p4a(o8q);
				this.w9b.j1b(y1h); 
				this.e5o(y1h, i0f);
				this.w9b.w8y(y1h);  
				i0f.w8y(y1h.h9q.r8w());
			}
		}

		if (this.r7l == g1x)
		{
			break;
		}

		if (
			this.r7l == "1-0" ||
			this.r7l == "2-0" ||
			this.r7l == "0-1" ||
			this.r7l == "0-2" ||
			this.r7l == "1/2-1/2" ||
			this.r7l == "1-1" ||
			this.r7l == "*" ||
			this.r7l == "**" ||
			this.r7l == "-*" ||
			this.r7l == "1-0*" ||
			this.r7l == "2-0*" ||
			this.r7l == "0-1*" ||
			this.r7l == "0-2*" ||
			this.r7l == "1/2-1/2*" ||
			this.r7l == "1-1*" ||
			this.r7l == "2-00*" ||
			this.r7l == "00-2*")
			break;

		if (this.r7l[0] == '$')
		{
			if (!a4g)
			{
				throw "error";
			}
			let e7j = p1s(this.r7l);
			if (e7j != n3d.m7l)
			{
				a4g.c1m(e7j);
				continue;
			}
			let style = u1i(this.r7l);
			if (style != h3e.m7l)
			{
				a4g.a9t(style);
				continue;
			}
			let value = y8s(this.r7l);
			if (value != z3q.m7l)
			{
				a4g.j7w(value);
				continue;
			}
			let v5n = z6x(this.r7l);
			if (v5n != s5r.m7l)
			{
				a4g.m1v(v5n);
				continue;
			}
			continue;
		}
		if (this.r7l[0] == '{')
		{
			let h7m = this.t5y();
      let g5m = new a3c();
  		this.u4j(h7m, g5m);
      if (!g5m.y8e.y5h())
      {
		  	if (a4g)
			  {
				  a4g.c6y(g5m.y8e);
				}
			}
   		if (!g5m.j1g.y5h())
      {
				if (a4g)
				{
					a4g.o0a(g5m.j1g);
				}
			}
   		if (!g5m.w7v.y5h())
      {
				if (a4g)
				{
					a4g.k1t(g5m.w7v);
				}
			}
      if (g5m.b6h)
      {
				if (a4g)
				{
					a4g.p0i();
				}
			}
      if (g5m.m5c)
      {
				if (a4g)
				{
					a4g.y5i();
				}
			}
   		h7m = g5m.d0i.trim();
      if (!h7m.length)
      {
        continue;
      }
			if (a4g)
			{
        let y3a = a4g.y3a();
        if (y3a.length)
        {
          y3a += ' ';
        }
        y3a += h7m;
				a4g.l8p(y3a);
			}
			else
			{
        if (this.v5p.length)
        {
   				this.v5p += ' ';
        }
				this.v5p += h7m;
				this.w9y = true;
			}
			continue;
		}
		if (!this.g6c())
		{
			continue;
		}
		let n1n = false;
		if (this.r7l[this.r7l.length] == '*')
		{
			this.r7l = this.r7l.substr(0, this.r7l.length - 1);
			n1n = true;
		}
 		let w9c = this.n0u(this.r7l);
    let r8w = d0x(i0f, this.r7l);
 		o8q = i0f.o8q();
		i0f.w8y(r8w);
		let h9q = u5v(r8w);
    h9q.a9t(w9c);
    this.w9b.q9u(y1h, h9q);
		a4g = y1h.h9q;
		if (this.w9y)
		{
			a4g.g1t(this.v5p);
			this.w9y = false;
      this.v5p = '';
		}
		if (n1n)
		{
			break;
		}
	} while (this.w2h());
}

n0u(c3l)
{
	if (c3l.endsWith("??"))
	{
		c3l = c3l.subString(0, c3l.length-2);
		return h3e.o0q;
	}
	else if (c3l.endsWith("!!"))
	{
		c3l = c3l.subString(0, c3l.length-2);
		return h3e.s9r;
	}
	else if (c3l.endsWith("?!"))
	{
		c3l = c3l.subString(0, c3l.length-2);
		return h3e.x2u;
	}
	else if (c3l.endsWith("!?"))
	{
		c3l = c3l.subString(0, c3l.length-2);
		return h3e.k9q;
	}
	else if (c3l.endsWith("?"))
	{
		c3l = c3l.subString(0, c3l.length-1);
		return h3e.l1r;
	}
	else if (c3l.endsWith("!"))
	{
		c3l = c3l.subString(0, c3l.length-1);
		return h3e.l0e;
	}
	else
	{
		return h3e.m7l;
	}
}

g6c()
{
	let a1i = this.r7l.length;
	let y1h = -1;
	for (let i = 0; i < a1i; i++)
	{
		if (this.r7l[i] == '.')
		{
			y1h = i;
		}
	}
	if (y1h != -1)
	{
		this.r7l = this.r7l.substr(y1h + 1 , a1i);
	}
	return this.r7l.length != 0;
}

w2h()
{
	this.r7l = "";
	let a4c = '';
	let index = 0;
	let a1i = 0;
	while (true)
	{
		let l2f = 0;
		if (this.a0r < this.e6s)
		{
			l2f = this.w1b[this.a0r];
		}
		else
		{
			l2f = 0;
		}
		if (!l2f)
		{
			if (a1i)
			{
				break;
			}
			if (!this.h9i())
			{
				return false;
			}
			continue;
		}
		if (l2f == ';')
		{
			if (!this.h9i())
			{
				return false;
			}
			continue;
		}
		if (l2f == '(')
		{
			if (a1i)
			{
				break;
			}
			else
			{
				this.a0r++;
				this.r7l = q4d;
				return true;
			}
		}
		if (l2f == ')')
		{
			if (a1i)
			{
				break;
			}
			else
			{
				this.a0r++;
				this.r7l = g1x;
				return true;
			}
		}
		if (l2f == '{')
		{
			if (a1i)
			{
				break;
			}
			else
			{
				this.a0r++;
				this.r7l = e3g;
				return true;
			}
		}
		if (l2f == ' ' || l2f == '\r' || l2f == '\n')
		{
			if (a1i)
			{
				this.a0r++;
				break;
			}
			else
			{
				this.a0r++;
				continue;
			}
		}
		a4c += l2f;
		index++;
		a1i++;
		this.a0r++;
	}
	if (index)
	{
		this.r7l += a4c;
	}
	return this.r7l.length != 0;
}

t5y()
{
	let c3l = '';
	let a4c = '';
	let index = 0;
	let e7g = 0;
	while (true)
	{
		let l2f = 0;
		if (this.a0r < this.e6s)
		{
			l2f = this.w1b[this.a0r];
		}
		else
		{
			l2f = 0;
		}
		if (!l2f)
		{
			if (!this.h9i())
			{
				break;
			}
			if (index > 0)
			{
				a4c += ' '; 
				index++;
			}
			continue;
		}
		if (l2f == '{')
		{
			e7g++;
		}
		if (l2f == '}')
		{
			if (e7g)
			{
				e7g--;
			}
			else
			{
				this.a0r++;
				break;
			}
		}
		a4c += l2f;
		index++;
		this.a0r++;
	}
	if (index)
	{
		c3l += a4c;
	}
	return c3l.trim();
}

k5o()
{
	this.b3h = "";

	let o4y = 0;
	let a1i = this.w1b.length;
	for (let i = a1i - 1; i >= 0; i--)
	{
		if (this.w1b[i] == ']')
		{
			o4y = i;
			break;
		}
	}
	let index = 0;
	let a5y = false;
	let a4c = '';
	while (true)
	{
		let l2f = 0;
		if (this.a0r < this.e6s)
		{
			l2f = this.w1b[this.a0r];
		}
		else
		{
			l2f = 0;
		}
		if (!l2f)
		{
			if (!this.h9i())
			{
				break;
			}
			continue;
		}
		if (l2f == '\"')
		{
			a5y = true;
			this.a0r++;
			continue;
		}
		if (l2f == ']')
		{
			if (this.a0r == o4y)
			{
				this.a0r++;
				break;
			}
		}
		if (a5y)
		{
			a4c += l2f;
			index++;
		}
		this.a0r++;
	}
	if (index)
	{
		this.b3h += a4c;
	}
}

u3n()
{
	if (this.r7l.length == 0)
	{
		return false;
	}
	if (this.r7l[0] != '[')
	{
		return false;
	}
	
	let index = this.a0r;
	let f9r = false;
	while (index < this.e6s)
	{
		let l2f = this.w1b[index++];
		if (l2f == '\"' && this.w1b[index] == ']')
		{
			index++;
			f9r = true;
			continue;
		}
		if (l2f == '\r' || l2f == '\n')
		{
			break;
		}
		if (f9r)
		{
			f9r = false;
			break;
		}
	}
	return f9r;
}

b4r()
{
	
	if (this.i9p(m0m))
	{
		this.k5o();
		this.k5e.y0q = this.b3h;
		return;
	}
	if (this.i9p(q1d))
	{
		this.k5o();
		this.k5e.z0u = this.b3h;
		return;
	}
	if (this.i9p(a4n))
	{
		this.k5o();
		this.k5e.q4g = this.b3h;
		return;
	}
	if (this.i9p(q6q))
	{
		this.k5o();
		this.k5e.f4u = this.b3h;
		return;
	}
	if (this.i9p(v0o))
	{
		this.k5o();
		this.k5e.m5m = this.b3h;
		return;
	}
	if (this.i9p(u2b))
	{
		this.k5o();
		this.k5e.w7u = this.b3h;
		return;
	}
	if (this.i9p(h7e) || this.i9p(t5c))
	{
		this.k5o();
		this.k5e.v5b = this.b3h;
		return;
	}
	if (this.i9p(k9o))
	{
		this.k5o();
		this.k5e.e2f = this.b3h;
		return;
	}
	if (this.i9p(q6h))
	{
		this.k5o();
		this.k5e.g3j = this.b3h;
		return;
	}
	if (this.i9p(g8h))
	{
		this.k5o();
		this.k5e.r6s = this.b3h;
		return;
	}

	
	if (this.i9p(c4p))
	{
		this.k5o();
		this.k5e.a3w = this.b3h;
		return;
	}
	if (this.i9p(p4t))
	{
		this.k5o();
		this.k5e.w3x = this.b3h;
		return;
	}
	if (this.i9p(a6v))
	{
		this.k5o();
		this.k5e.u8x = this.b3h;
		return;
	}
	if (this.i9p(r9d))
	{
		this.k5o();
		this.k5e.o5g = this.b3h;
		return;
	}
	if (this.i9p(i9g))
	{
		this.k5o();
		this.k5e.l6w = this.b3h;
		return;
	}
	if (this.i9p(q4r))
	{
		this.k5o();
		this.k5e.u4r = this.b3h;
		return;
	}
	if (this.i9p(e7i) || this.i9p(f0w))
	{
		this.k5o();
		this.k5e.w1l = this.b3h;
		return;
	}
	if (this.i9p(f8t))
	{
		this.k5o();
		this.k5e.c8v = this.b3h;
		return;
	}
	if (this.i9p(j4f))
	{
		this.k5o();
		this.k5e.p3a = this.b3h;
		return;
	}
	if (this.i9p(k3m))
	{
		this.k5o();
		this.k5e.g6f = this.b3h;
		return;
	}

	
	if (this.i9p(k8m))
	{
		this.k5o();
		this.k5e.d9o = this.b3h;
		return;
	}
	if (this.i9p(r7k))
	{
		this.k5o();
		this.k5e.n9i = this.b3h;
		return;
	}
	if (this.i9p(g2e))
	{
		this.k5o();
		this.k5e.p8f = this.b3h;
		return;
	}
	if (this.i9p(q5c))
	{
		this.k5o();
		this.k5e.i3n = this.b3h;
		return;
	}
	if (this.i9p(m1b))
	{
		this.k5o();
		this.k5e.r5k = this.b3h;
		return;
	}
	if (this.i9p(x8d))
	{
		this.k5o();
		this.k5e.h3w = this.b3h;
		return;
	}
	if (this.i9p(f5y))
	{
		this.k5o();
		this.k5e.c2s = this.b3h;
		return;
	}
	if (this.i9p(q4i))
	{
		this.k5o();
		this.k5e.y6q = this.b3h;
		return;
	}
	if (this.i9p(e8f))
	{
		this.k5o();
		this.k5e.s5e = this.b3h;
		return;
	}
	if (this.i9p(h2t))
	{
		this.k5o();
		this.k5e.r5i = this.b3h;
		return;
	}
	if (this.i9p(s1j))
	{
		this.k5o();
		this.k5e.r0n = this.b3h;
		return;
	}
	if (this.i9p(t5d))
	{
		this.k5o();
		this.k5e.c7a = this.b3h;
		return;
	}
	if (this.i9p(s4e))
	{
		this.k5o();
		this.k5e.c5w = this.b3h;
		return;
	}

	
	if (this.i9p(s3t))
	{
		this.k5o();
		this.k5e.l8k = this.b3h;
		return;
	}

	
	if (this.i9p(s5k))
	{
		this.k5o();
		this.k5e.m0n = this.b3h;
		return;
	}
	if (this.i9p(c8n))
	{
		this.k5o();
		this.k5e.m0n = this.b3h;
		return;
	}
	if (this.i9p(g4p))
	{
		this.k5o();
		this.k5e.k6p = this.b3h;
		return;
	}
	if (this.i9p(p9u))
	{
		this.k5o();
		this.k5e.b3q = this.b3h;
		return;
	}
	if (this.i9p(r3c))
	{
		this.k5o();
		this.k5e.b3q = this.b3h;
		return;
	}
	if (this.i9p(u1p))
	{
		this.k5o();
		this.k5e.o7a = this.b3h;
		return;
	}
	if (this.i9p(d1b))
	{
		this.k5o();
		this.k5e.i2r = this.b3h;
		return;
	}
	if (this.i9p(l7a))
	{
		this.k5o();
		this.k5e.g8j = this.b3h;
		return;
	}

	
	if (this.i9p(d1h))
	{
		this.k5o();
		this.k5e.j4r = this.b3h;
		return;
	}

	
	if (this.i9p(f0r))
	{
		this.k5o();
		this.k5e.k6v = this.b3h;
		return;
	}
	if (this.i9p(r0p))
	{
		this.k5o();
		this.k5e.t3j = this.b3h;
		return;
	}
	if (this.i9p(r6p))
	{
		this.k5o();
		this.k5e.j5w = this.b3h;
		return;
	}
	if (this.i9p(v7w))
	{
		this.k5o();
		this.k5e.e3i = this.b3h;
		return;
	}

	
	if (this.i9p(p5d))
	{
		this.k5o();
		this.k5e.o4g = this.b3h;
		return;
	}

	
	if (this.i9p(g8a))
	{
		this.k5o();
		return;
	}
	if (this.i9p(u3a))
	{
		this.k5o();
		if (this.b3h.length == 0 || this.b3h == "?")
		{
			return;
		}
		this.a1y = true;
		this.y9p = this.b3h;
		return;
	}
	if (this.i9p(p0h))
	{
		this.k5o();
		this.l2k = q8h(this.b3h, 0);
		return;
	}
  
 	if (this.i9p(w1w))
	{
		this.k5o();
		this.k5e.a6w = this.b3h;
		return;
	}

}

t7d(h7m)
{
	let t2v = new o9p();
	let c3l = h7m.substr(6, h7m.length - 6);
	let q3c = c3l.split(",");
	for (const s of q3c)
	{
		if (s.length < 5)
		{
			continue;
		}
		let y9f = t5v(s.substr(1, 2));
		let r7v = t5v(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let c0a = t1c(y9f, r7v, s3g.f8u);
			t2v.add(c0a);
		}
		else if (s[0] == 'G')
		{
			let c0a = t1c(y9f, r7v, s3g.s4w);
			t2v.add(c0a);
		}
		else if (s[0] == 'Y')
		{
			let c0a = t1c(y9f, r7v, s3g.r3f);
			t2v.add(c0a);
		}
	}
	return t2v;
}

x1f(h7m)
{
	let z1b = new h4e();
	let c3l = h7m.substr(6, h7m.length - 6);
	let q3c = c3l.split(",");
	for (const s of q3c)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let s4c = t5v(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let w0e = w8x(s4c, a8q.z9c);
			z1b.add(w0e);
		}
		else if (s[0] == 'G')
		{
      let w0e = w8x(s4c, a8q.s8y);
			z1b.add(w0e);
		}
		else if (s[0] == 'Y')
		{
      let w0e = w8x(s4c, a8q.u8o);
			z1b.add(w0e);
		}
	}
	return z1b;
}

u4n(h7m)
{
	let c3l = h7m.substr(6, h7m.length - 6);
	let y1h = c3l.indexOf("]");
	if (y1h != -1)
	{
		let w7v = new k1v();
		let value = q8h(c3l.substr(0, y1h), 0);
		w7v.j3b(value);
		return w7v;
	}
	else
	{
		return new k1v();
	}
}


u4j(h7m, g5m)
{
	if (
		h7m.startsWith("[%cal") ||
    h7m.startsWith("[%csb") ||
		h7m.startsWith("[%csl") ||
		h7m.startsWith("[%mdl") ||
		h7m.startsWith("[%evp") ||
		h7m.startsWith("[%eval") ||
		h7m.startsWith("[%emt") ||
		h7m.startsWith("[%tqu") ||
		h7m.startsWith("[%tqu") ||
		h7m.startsWith("[%pws") ||
		h7m.startsWith("[%pth") ||
		h7m.startsWith("[%eog"))
	{
		let g8s = 0;
		{
     	let r4j = h7m.indexOf("[%cal");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
     			let x7c = h7m.substring(r4j, b1m + 1);
					g5m.y8e = this.t7d(x7c).p7u();
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
     	let r4j = h7m.indexOf("[%csb");
   		if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
          let q0e = h7m.substring(r4j, b1m + 1);
					g5m.j1g = this.x1f(q0e).p7u();
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%csl");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
          let q0e = h7m.substring(r4j, b1m + 1);
					g5m.j1g = this.x1f(q0e).p7u();
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%mdl");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
          let w7o = h7m.substring(r4j, b1m + 1);
					g5m.w7v = this.u4n(w7o).p7u();
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%evp");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%eval");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%emt");
			if (r4j = -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%tqu");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%pws");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
          g5m.t6o = true;
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%pth");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
          g5m.b6h = true;
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
		{
      let r4j = h7m.indexOf("[%eog");
			if (r4j != -1)
			{
        let b1m = h7m.indexOf("]", r4j);
				if (b1m != -1)
				{
					g5m.m5c = true; 
					if (b1m > g8s) g8s = b1m;
				}
			}
		}
    g5m.d0i = h7m.substring(g8s + 1);
	}
	else
	{
		g5m.d0i = h7m;
	}
}

}

class s8b
{

constructor()
{
  this.u8u = 0;
	this.v3u = new s3w();
	this.t0d = new f6j();
}

p7u()
{
	let s4v = new s8b();
  s4v.u8u = this.u8u;
	s4v.v3u = this.v3u.p7u();
	s4v.t0d = this.t0d.p7u();
	return s4v;
}

}

class s3w
{

constructor()
{
	this.y0q = '';
	this.z0u = '';
	this.q4g = '';
	this.f4u = '';
	this.m5m = '';
	this.w7u = '';
	this.v5b = '';
	this.e2f = '';
	this.g3j = '';
  this.r6s = '';
	this.a3w = '';
	this.w3x = '';
	this.u8x = '';
	this.o5g = '';
	this.l6w = '';
	this.u4r = '';
	this.w1l = '';
	this.c8v = '';
	this.p3a = '';
  this.g6f = '';
	this.d9o = '';
	this.n9i = '';
	this.p8f = '';
	this.i3n = '';
	this.r5k = '';
	this.h3w = '';
	this.c2s = '';
	this.y6q = '';
	this.s5e = '';
	this.r5i = '';
	this.r0n = '';
	this.c7a = '';
	this.c5w = '';
	this.l8k = '';
	this.m0n = '';
	this.k6p = '';
	this.b3q = '';
	this.o7a = '';
	this.i2r = '';
	this.g8j = '';
	this.j4r = '';
	this.k6v = '';
	this.t3j = '';
	this.j5w = '';
	this.e3i = '';
	this.o4g = '';
  this.a6w = '';
}

p7u()
{
	let w7z = new s3w();

	w7z.y0q = this.y0q;
	w7z.z0u = this.z0u;
	w7z.q4g = this.q4g;
	w7z.f4u = this.f4u;
	w7z.m5m = this.m5m;
	w7z.w7u = this.w7u;
	w7z.v5b = this.v5b;
	w7z.e2f = this.e2f;
	w7z.g3j = this.g3j;
	w7z.r6s = this.r6s;

	w7z.a3w = this.a3w;
	w7z.w3x = this.w3x;
	w7z.u8x = this.u8x;
	w7z.o5g = this.o5g;
	w7z.l6w = this.l6w;
	w7z.u4r = this.u4r;
	w7z.w1l = this.w1l;
	w7z.c8v = this.c8v;
	w7z.p3a = this.p3a;
	w7z.g6f = this.g6f;

	w7z.d9o = this.d9o;
	w7z.n9i = this.n9i;
	w7z.p8f = this.p8f;
	w7z.i3n = this.i3n;
	w7z.r5k = this.r5k;
	w7z.h3w = this.h3w;
	w7z.c2s = this.c2s;
	w7z.y6q = this.y6q;
	w7z.s5e = this.s5e;
	w7z.r5i = this.r5i;
	w7z.r0n = this.r0n;
	w7z.c7a = this.c7a;
	w7z.c5w = this.c5w;

	w7z.l8k = this.l8k;

	w7z.m0n = this.m0n;
	w7z.k6p = this.k6p;
	w7z.b3q = this.b3q;
	w7z.o7a = this.o7a;
	w7z.i2r = this.i2r;
	w7z.g8j = this.g8j;

	w7z.j4r = this.j4r;

	w7z.k6v = this.k6v;
	w7z.t3j = this.t3j;
	w7z.j5w = this.j5w;
	w7z.e3i = this.e3i;

	w7z.o4g = this.o4g;
 	w7z.a6w = this.a6w;

	return w7z;
}

}


const s3u =
[
		[ q4y.m7l, 				  									"",											            "", 																	"",   ""    ],
		[ q4y.h9r, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ q4y.q0n, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ q4y.a0n,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ q4y.k6b,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ q4y.h2z,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ q4y.f3w,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ q4y.e0a,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ q4y.t7b,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ q4y.g0s,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ q4y.d4c,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ q4y.k2u,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ q4y.q2z,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ q4y.e3q,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ q4y.q9c,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ q4y.d2x,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ q4y.a0h,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ q4y.g1h,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ q4y.c6p,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ q4y.h9f,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ q4y.u3k,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ q4y.a8l,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ q4y.l5k,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ q4y.c5j,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ q4y.p6f,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ q4y.j9e,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ q4y.g5h,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ q4y.r8g,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ q4y.t3i,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ q4y.y0l,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ q4y.f5l,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ q4y.x4v,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ q4y.h0y,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ q4y.h8z,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ q4y.d4d, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ q4y.z3z,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ q4y.l9h, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ q4y.z7t,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ q4y.j6g,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ q4y.p7o,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ q4y.r7o,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ q4y.f3k,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ q4y.d3a,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ q4y.u6j,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ q4y.w5v,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ q4y.v1p,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ q4y.o6t,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ q4y.a4v,  												 	"China",														"China",															"cn", "CHN" ],
		[ q4y.y0j,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ q4y.t2b,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ q4y.r8n,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ q4y.z0h,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ q4y.k8z,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ q4y.n2y,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ q4y.c2b,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ q4y.u5x,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ q4y.w2g,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ q4y.j9y,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ q4y.a7d,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ q4y.o9m,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ q4y.u6e,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ q4y.d6n,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ q4y.c4y,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ q4y.s0y,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ q4y.u5g,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ q4y.l5x,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ q4y.o3l,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ q4y.z1h,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ q4y.q0s,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ q4y.c7u,  												"England",													"England",														"x3", "GBR" ],
		[ q4y.v3e,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ q4y.b5b,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ q4y.n3x,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ q4y.l1k,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ q4y.p6h,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ q4y.i7u,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ q4y.b4c,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ q4y.f9j,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ q4y.h7t,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ q4y.z3p,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ q4y.z4d,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ q4y.o8l,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ q4y.h2x,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ q4y.e0y,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ q4y.u3h,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ q4y.q2x,  												"Germany",													"Germany",														"de", "DEU" ],
		[ q4y.g5p, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ q4y.a0u,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ q4y.r2j,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ q4y.g4d,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ q4y.u8g,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ q4y.v0k,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ q4y.y9d,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ q4y.f1x,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ q4y.n5q,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ q4y.b6j,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ q4y.c8t,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ q4y.a9x,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ q4y.g0h,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ q4y.f1z, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ q4y.l9z,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ q4y.c9k,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ q4y.b7s,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ q4y.d0e,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ q4y.t0e,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ q4y.l0c,  												 	"India",														"India",															"in", "IND" ],
		[ q4y.w2n,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ q4y.c4e,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ q4y.s1t,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ q4y.k1r,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ q4y.h7u,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ q4y.u6q,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ q4y.p6e,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ q4y.s5y,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ q4y.z8a,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ q4y.y6v,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ q4y.g7b,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ q4y.x5h,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ q4y.u7s,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ q4y.a3h,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ q4y.a0b,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ q4y.n4f,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ q4y.f7h,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ q4y.i3h,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ q4y.e9g,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ q4y.u9u,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ q4y.q2b,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ q4y.x9l, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ q4y.r1x,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ q4y.n3j, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ q4y.g0z,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ q4y.f8e,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ q4y.y2l,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ q4y.e7o,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ q4y.m5q,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ q4y.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ q4y.t7o,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ q4y.d7v,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ q4y.s4m,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ q4y.u0h,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ q4y.i2z,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ q4y.l1n, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ q4y.e6x,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ q4y.b6r,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ q4y.s3i,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ q4y.j9b,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ q4y.j2h,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ q4y.c0b,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ q4y.k6h,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ q4y.x8j,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ q4y.s1b,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ q4y.i0k,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ q4y.d4x,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ q4y.e4w,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ q4y.u7e,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ q4y.j8v,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ q4y.j2n,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ q4y.l8z, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ q4y.i0v,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ q4y.t6j,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ q4y.z8v,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ q4y.g1k,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ q4y.a1z, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ q4y.p3i,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ q4y.h0l,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ q4y.d0b,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ q4y.v0v,  													"Niger",														"Niger",															"ne", "NER" ],
		[ q4y.i1x,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ q4y.c8g,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ q4y.r3h,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ q4y.q5n,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ q4y.l2y,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ q4y.g9r,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ q4y.h4v,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ q4y.b6s,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ q4y.x3p,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ q4y.k7x,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ q4y.f6y,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ q4y.d0a,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ q4y.a8e,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ q4y.o8s,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ q4y.r1i,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ q4y.q2n,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ q4y.d1c,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ q4y.f9d,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ q4y.v3p,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ q4y.r2k,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ q4y.a9b,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ q4y.d2j,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ q4y.k8e,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ q4y.y4p,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ q4y.k2z,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ q4y.k5v,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ q4y.q3j,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ q4y.j7p, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ q4y.t6m,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ q4y.c4n,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ q4y.w8f,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ q4y.n6x,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ q4y.d3z,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ q4y.h8q,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ q4y.c9f,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ q4y.u4b,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ q4y.h0s,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ q4y.p8e,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ q4y.x0s,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ q4y.s2z,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ q4y.z4p,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ q4y.a7n,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ q4y.f6o,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ q4y.l2r,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ q4y.x1t,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ q4y.b5g,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ q4y.s5m,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ q4y.r3q, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ q4y.v6p,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ q4y.f7m,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ q4y.i6f, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ q4y.o2g,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ q4y.r2u,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ q4y.n5z,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ q4y.p3c,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ q4y.e1l,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ q4y.t6c,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ q4y.n6a,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ q4y.c8h,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ q4y.d5t,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ q4y.h6o,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ q4y.p2t,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ q4y.s7b, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ q4y.u8c,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ q4y.x7q, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ q4y.s4p,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ q4y.a4x,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ q4y.p8m,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ q4y.o5b,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ q4y.o5l,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ q4y.b9b,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ q4y.f7z,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ q4y.f0h,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ q4y.u5q,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ q4y.k0i,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ q4y.e7u,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ q4y.n8t,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ q4y.u9a,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ q4y.b9v, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ q4y.u6v,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ q4y.q0b,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ q4y.a1r,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ q4y.r0q,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ q4y.z7w,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ q4y.w8s,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ q4y.b8v,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ q4y.u9b,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ q4y.i7b,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ q4y.x8t,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ q4y.p0r,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ q4y.q2a,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ q4y.g6m,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ q4y.p3u,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function e6b(c8q)
{
	return s3u[c8q][2];
}

function q0v(c8q)
{
	return s3u[c8q][4];
}

function h7v(t8b)
{
	for (const c8q of s3u)
	{
		if (c8q[4] == t8b)
		{
			return c8q[0];
		}
	}
	return q4y.m7l;
}

function s8u(w0l)
{
	for (const c8q of s3u)
	{
		if (c8q[3] == w0l)
		{
			return c8q[0];
		}
	}
	return q4y.m7l;
}
class y6a
{

constructor()
{
	this.h7m = '';
}

q1w(c3l)
{
	this.h7m += c3l;
}

b1r(c3l)
{
	this.h7m += c3l + '\n';
}

y0g()
{
	this.h7m += '\n';
}

}




function q8h(g7l, u3d)
{
	let value = Number(g7l);
	if (isNaN(value))
	{
		return u3d;
	}
	else
	{
		return value;
	}
}
