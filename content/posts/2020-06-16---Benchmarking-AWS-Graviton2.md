---
title: 'Benchmarking the AWS Graviton2 processors'
subtitle: A quick look at what all the fuss is about
slug: aws-graviton2-benchmark
description: >
  I've been hearing a lot of good things about the new AWS Graviton2 processors,
  so I wanted to see the numbers for myself.
  Let's look at where the Graviton2 stacks up with some of the other Amazon EC2 options.
date: 2020-06-16
category: 'compute'
socialImage: '/media/20200616/socialimage.png'
template: 'post'
draft: false
tags:
  - 'AWS'
  - 'Graviton2'
  - 'EC2'
  - 'Compute'
---

There's been a lot of fanfare about the new [AWS Graviton2 processors][graviton2],
and the performance and cost benefits of using them compared to their
alternatives in the cloud.

These ARM-based processors power the [new M6g, C6g, and R6g family of EC2 instance types][hamilton],
with the previous (first) generation powering the [A1 family of EC2 instances][a1ec2].
AWS promises that the Graviton2 offers significant improvements over the current 5th gen x86 EC2 mainstays.
(20% lower cost and 40% higher performance, based on AWS' own internal testing,
according to the [AWS Graviton2 landing page][graviton2].)

So, I wanted to have a bit of fun and do some light benchmarking myself.

## Methodology

I wanted to gather as many data points as I could without spending too much effort on it,
so I created a bash script that's meant to be run as an EC2 instance's user data.
I've always thought that the naming was pretty off --- [EC2 user data][userdata] scripts execute on launch.

[You can take a look at the script here][sysbench-script].
It will essentially do the following:

- Gather some information from the [instance metadata][metadata],
- Install `sysbench` and the AWS CLI,
- Set the instance to terminate when it's shut down (instead of just stopping),
- In sets of powers of 2, for the available cores in the machine:
  - Run benchmarking tests,
  - Format and append the results into a CSV file
- Upload the results to an Amazon S3 bucket,
- Shutdown the instance (effectively terminating it)

To automate the entire process, I created an [EC2 Launch Template][launchtemplate]
that uses this user data script, and created an [EC2 Autoscaling Group][autoscaling] from it.
The EC2 instances will run the benchmark tests and terminate themselves,
and the autoscaling groups will happily create new instances to replace them.
Left those running for a day or so, just collecting results on S3.

Once the data points are ready, accessing them is simply just a matter of using [AWS Glue][glue]
and [Amazon Athena][athena] to run some SQL queries directly on the CSV files to crunch the numbers.

## Results

After a weekend of running the benchmarks, I managed to get the sample pool below.

<FigureImage
  fluid
  src='/media/20200616/samplecount.png'
  alt='Count of data points for each instance type.'>
Count of data points for each instance type.
</FigureImage>

I wanted to get benchmarking results for when all the cores in the instance are used together,
as well as when constraining the testing to just a single core.
All the instance types I used have 2 cores, with varying levels of memory.
If you use the user data script above for your own testing, however,
it should also test for other core combinations (e.g. 1, 2, 4, 8, etc).

These are the summarized results from the **single-thread** benchmark tests:

<FigureImage
  fluid
  src='/media/20200616/singlethreadresults.png'
  alt='Results for single-thread benchmarking'>
Results when benchmarking was constrained to a single thread.
</FigureImage>

And these are the summary from the **multi-thread** benchmark tests (all of which effectively have 2 threads):

<FigureImage
  fluid
  src='/media/20200616/multithreadresults.png'
  alt='Results for 2-core benchmarking'>
Results when benchmarking when using both cores on each instance type.
</FigureImage>

I had a few minutes to spare, so I went ahead and looked at how much improvement
each Graviton2 instance gave over each other non-Graviton2 option:

<FigureImage
  fluid
  src='/media/20200616/totalevents_comparison.png'
  alt='Total events improvement of Graviton2 instances compared to non-Graviton2'>
Percent increase of average total events of Graviton2 instances.
</FigureImage>

For really quick, shallow numbers, I think these are definitely quite telling.
Granted, the _real_ litmus test of any new tech is on their application to real scenarios
(and not just tests like these that lack context),
but I'd say that the numbers as they are are indicative that the Graviton2 processors
definitely offer pronounced improvements over the other options.

It'd be nice to find some time to be able to run an applied benchmarking test,
like [how KeyDB did theirs][keydb].

[graviton2]: https://aws.amazon.com/ec2/graviton
[hamilton]: https://youtu.be/LNqRvP6Xvrw
[a1ec2]: https://aws.amazon.com/ec2/instance-types/a1/
[userdata]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html#user-data-shell-scripts
[metadata]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html
[sysbench-script]: https://gist.github.com/richardneililagan/e66bca28939a4677a498ac5ae4e0b2aa
[launchtemplate]: https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html
[autoscaling]: https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html
[athena]: https://aws.amazon.com/athena/
[glue]: https://aws.amazon.com/glue
[keydb]: https://docs.keydb.dev/blog/2020/03/02/blog-post/
