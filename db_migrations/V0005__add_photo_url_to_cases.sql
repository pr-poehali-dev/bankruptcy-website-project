ALTER TABLE t_p87329859_bankruptcy_website_p.cases ADD COLUMN IF NOT EXISTS photo_url text NULL;

UPDATE t_p87329859_bankruptcy_website_p.cases SET photo_url = 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/53627392-a8b9-4b59-910c-07f9f0863778.jpg' WHERE id = 1;
UPDATE t_p87329859_bankruptcy_website_p.cases SET photo_url = 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/6582b74a-9416-4833-8e66-ab6e18172b0b.jpg' WHERE id = 2;
UPDATE t_p87329859_bankruptcy_website_p.cases SET photo_url = 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/d7397830-dbd1-4467-b16f-fadce9c653f2.jpg' WHERE id = 3;
UPDATE t_p87329859_bankruptcy_website_p.cases SET photo_url = 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/06f7666e-909f-4183-aed3-b3d6e40f6ea8.jpg' WHERE id = 4;
UPDATE t_p87329859_bankruptcy_website_p.cases SET photo_url = 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/4e293c87-cfe3-46fa-9b31-67c1c8c4ad4f.jpg' WHERE id = 5;
